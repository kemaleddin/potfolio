import { Link } from 'react-router-dom'
import { Briefcase, Calendar } from 'lucide-react'
import Breadcrumb from '../components/Breadcrumb'
import { useTranslation } from 'react-i18next'
import './Timeline.css'

interface Experience {
    id: number;
    title: string;
    company: string;
    date: string;
    description: string;
    type: string;
}

const Timeline = () => {
    const { t } = useTranslation();
    const experiences = t('timeline.experiences', { returnObjects: true }) as Experience[];

    return (
        <div className="timeline-page-wrapper" style={{ paddingTop: '2rem', paddingBottom: '2rem', minHeight: '100vh', backgroundColor: 'var(--background)' }}>

            <div className="timeline-header-container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '1rem 2rem 0' }}>
                <Breadcrumb />
            </div>
            <div className="timeline-page">
                <header className="timeline-header">
                    <h1>{t('timeline.title')}</h1>
                </header>

                <div className="timeline-container">
                    {experiences.map((exp) => (
                        <div key={exp.id} className="timeline-item">
                            <div className="timeline-marker">
                                <div className="timeline-icon">
                                    <Briefcase size={20} />
                                </div>
                                <div className="timeline-line"></div>
                            </div>
                            <div className="timeline-content">
                                <div className="timeline-date">
                                    <Calendar size={16} />
                                    <span>{exp.date}</span>
                                </div>
                                <h3 className="timeline-title">{exp.title}</h3>
                                <h4 className="timeline-company">{exp.company}</h4>
                                <p className="timeline-description">{exp.description}</p>
                                <Link to={`/timeline/work/${exp.id}`} className="timeline-project-link">
                                    {t('timeline.viewProjects')}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Timeline
