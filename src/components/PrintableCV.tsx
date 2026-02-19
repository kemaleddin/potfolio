import { useTranslation } from 'react-i18next'
import './PrintableCV.css'
import { Mail, Phone, Globe, Github, Linkedin } from 'lucide-react'

// Interfaces mirroring the translation structure
interface Experience {
    id: number;
    title: string;
    company: string;
    date: string;
    description: string;
}

interface Project {
    id: number;
    title: string;
    description: string;
    tech: string;
}

interface Education {
    date: string;
    school: string;
    department: string;
}

const PrintableCV = () => {
    const { t } = useTranslation()
    const experiences = t('timeline.experiences', { returnObjects: true }) as Experience[];
    const projects = t('work.projects', { returnObjects: true }) as Project[];
    const educations = t('education.items', { returnObjects: true }) as Education[];

    // Hardcoded skills to match Skills.tsx for consistency
    const skills = [
        { name: 'Android', level: 88 },
        { name: 'Kotlin', level: 85 },
        { name: '.NET Core', level: 90 },
        { name: 'ASP.NET Core Web API', level: 90 },
        { name: 'Entity Framework Core', level: 85 },
        { name: 'CQRS', level: 80 },
        { name: 'MediatR', level: 80 },
        { name: 'Clean Architecture', level: 85 },
        { name: 'SQL / PostgreSQL', level: 78 },
        { name: 'Angular', level: 70 },
        { name: 'Docker', level: 65 },
        { name: 'Git', level: 85 }
    ];

    return (
        <div className="printable-cv" id="printable-cv">
            {/* Header */}
            <header className="cv-header">
                <div className="cv-header-left">
                    <h1 className="cv-name">Kemalettin Sargın</h1>
                    <h2 className="cv-title">{t('hero.title')}</h2>
                    <p className="cv-summary">{t('hero.description')}</p>
                </div>

                <div className="cv-contact-info">
                    <div className="cv-contact-item">
                        <Mail size={14} />
                        <span>kemalettin@sargin.me</span>
                    </div>
                    <div className="cv-contact-item">
                        <Phone size={14} />
                        <span>+90 534 495 45 42</span>
                    </div>
                    <div className="cv-contact-item">
                        <Globe size={14} />
                        <span>https://kemalettin.sargin.me</span>
                    </div>
                    <div className="cv-contact-item">
                        <Linkedin size={14} />
                        <span>linkedin.com/in/kemalettinsargın</span>
                    </div>
                    <div className="cv-contact-item">
                        <Github size={14} />
                        <span>github.com/kemaleddin</span>
                    </div>
                </div>
            </header>

            <div className="cv-body">
                <div className="cv-main-column">
                    {/* Experience */}
                    <section className="cv-section">
                        <h3 className="cv-section-title">{t('timeline.title')}</h3>
                        <div className="cv-experiences">
                            {experiences.map((exp) => (
                                <div key={exp.id} className="cv-experience-item">
                                    <div className="cv-experience-header">
                                        <h4 className="cv-experience-role">{exp.title}</h4>
                                    </div>
                                    <div className="cv-experience-sub-header">
                                        <span className="cv-experience-company">{exp.company}</span>
                                        <span className="cv-experience-date">{exp.date}</span>
                                    </div>
                                    <p className="cv-experience-description">{exp.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Projects */}
                    <section className="cv-section">
                        <h3 className="cv-section-title">Projeler</h3>
                        <div className="cv-projects">
                            {projects.map((proj) => (
                                <div key={proj.id} className="cv-project-item">
                                    <div className="cv-project-header">
                                        <h4 className="cv-project-title">{proj.title}</h4>
                                    </div>
                                    <p className="cv-project-description">{proj.description}</p>
                                    <div className="cv-project-tech">{proj.tech}</div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                <div className="cv-side-column">
                    {/* Skills */}
                    <section className="cv-section">
                        <h3 className="cv-section-title">{t('skills.title')}</h3>
                        <div className="cv-skills-list">
                            {skills.map((skill, index) => (
                                <div key={index} className="cv-skill-item">
                                    <span className="cv-skill-name">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Education */}
                    <section className="cv-section">
                        <h3 className="cv-section-title">{t('education.title')}</h3>
                        <div className="cv-education-list">
                            {educations.map((edu, index) => (
                                <div key={index} className="cv-education-item">
                                    <div className="cv-education-date">{edu.date}</div>
                                    <div className="cv-education-school">{edu.school}</div>
                                    <ul className="cv-education-department">
                                        <li>{edu.department}</li>
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default PrintableCV
