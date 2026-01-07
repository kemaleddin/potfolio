import './Timeline.css'
import { Link } from 'react-router-dom'
import { Briefcase, Calendar, ChevronLeft } from 'lucide-react'

const Timeline = () => {
    const experiences = [
        {
            "id": 1,
            "title": "Senior Full-Stack Developer & Software Consultant",
            "company": "Freelance",
            "date": "2022 - Present",
            "description": "Building end-to-end E-commerce solutions using .NET 8, PostgreSQL, and Angular with Onion Architecture, CQRS, and MediatR. Designed Bluetooth serial adapter hardware and integrated low-level communication protocols for hardware-software synchronization.",
            "type": "work"
        },
        {
            "id": 2,
            "title": "Senior Android & Backend Developer",
            "company": "Orjin Yazılım",
            "date": "2018 - 2022",
            "description": "Developed native Android applications for enterprise fleet, construction, and maintenance management systems. Engineered scalable .NET Web APIs to manage high-traffic data synchronization and complex business logic.",
            "type": "work"
        },
        {
            "id": 3,
            "title": "Android Application Developer",
            "company": "Kuark Dijital",
            "date": "2013 - 2017",
            "description": "Managed the full lifecycle of 15+ Android applications published on Google Play Store. Specialized in SDK integrations, UI/UX optimization, and maintaining app performance across diverse categories during a 4.5-year tenure.",
            "type": "work"
        }
    ]

    return (
        <div className="timeline-page">
            <header className="timeline-header">
                <Link to="/" className="back-link">
                    <ChevronLeft size={20} />
                    Back to Home
                </Link>
                <h1>Professional Journey</h1>
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
                                View Projects
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Timeline
