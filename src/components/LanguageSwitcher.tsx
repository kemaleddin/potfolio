import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.css';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    return (
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
    );
};

export default LanguageSwitcher;
