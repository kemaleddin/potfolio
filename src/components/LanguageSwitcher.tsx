import { useTranslation } from 'react-i18next';
import { Download } from 'lucide-react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import './LanguageSwitcher.css';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    const handleDownloadCV = async () => {
        const element = document.getElementById('printable-cv')
        if (!element) return

        try {
            const canvas = await html2canvas(element, {
                scale: 2,
                useCORS: true,
                logging: false
            })

            const pdf = new jsPDF('p', 'mm', 'a4')
            const pdfWidth = pdf.internal.pageSize.getWidth()
            const pdfHeight = pdf.internal.pageSize.getHeight()
            const imgWidth = canvas.width
            const imgHeight = canvas.height

            const ratio = pdfWidth / imgWidth

            const pageHeightPx = pdfHeight / ratio

            let currentY = 0
            let remainingHeight = imgHeight

            const breakPoints: number[] = []
            const elements = element.querySelectorAll('.cv-header, .cv-section-title, .cv-experience-item, .cv-project-item, .cv-skill-item')

            const containerRect = element.getBoundingClientRect()
            const scaleFactor = canvas.height / containerRect.height;

            elements.forEach((el) => {
                const rect = el.getBoundingClientRect()
                const bottom = (rect.bottom - containerRect.top) * scaleFactor
                breakPoints.push(bottom + 10)
            })

            breakPoints.sort((a, b) => a - b)

            while (remainingHeight > 0) {
                let cutY = currentY + pageHeightPx

                if (remainingHeight > pageHeightPx) {
                    let bestBreak = -1
                    for (const bp of breakPoints) {
                        if (bp > currentY && bp < cutY) {
                            bestBreak = bp
                        }
                    }

                    if (bestBreak !== -1) {
                        cutY = bestBreak
                    }
                } else {
                    cutY = currentY + remainingHeight
                }

                const pageCanvas = document.createElement('canvas')
                pageCanvas.width = canvas.width
                pageCanvas.height = (cutY - currentY)

                const ctx = pageCanvas.getContext('2d')
                if (ctx) {
                    ctx.drawImage(
                        canvas,
                        0, currentY, canvas.width, (cutY - currentY),
                        0, 0, canvas.width, (cutY - currentY)
                    )

                    const pageImgData = pageCanvas.toDataURL('image/png')
                    if (currentY > 0) pdf.addPage()

                    const pdfPageHeight = (pageCanvas.height * ratio)
                    const topMargin = currentY > 0 ? 10 : 0

                    pdf.addImage(pageImgData, 'PNG', 0, topMargin, pdfWidth, pdfPageHeight)
                }

                remainingHeight -= (cutY - currentY)
                currentY = cutY
            }

            pdf.save('Kemalettin_Sargin_CV.pdf')
        } catch (error) {
            console.error('Error generating PDF:', error)
        }
    }

    return (
        <div className="top-utils-container">
            <button
                className="cv-download-btn"
                onClick={handleDownloadCV}
                aria-label="Download CV"
                data-tooltip={i18n.language.startsWith('tr') ? "CV'yi İndir" : "Download CV"}
            >
                <Download size={16} />
            </button>
            <div className="language-switcher">
                <button
                    className={`lang-btn ${i18n.language.startsWith('en') ? 'active' : ''}`}
                    onClick={() => changeLanguage('en')}
                    aria-label="Switch to English"
                >
                    EN
                </button>
                <span className="divider">|</span>
                <button
                    className={`lang-btn ${i18n.language.startsWith('tr') ? 'active' : ''}`}
                    onClick={() => changeLanguage('tr')}
                    aria-label="Türkçe'ye geç"
                >
                    TR
                </button>
            </div>
        </div>
    );
};

export default LanguageSwitcher;
