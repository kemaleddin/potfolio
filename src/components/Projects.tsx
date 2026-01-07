import './Projects.css'
import { useTranslation } from 'react-i18next'

interface ProjectsProps {
  experienceId?: number;
}

interface Project {
  id: number;
  experienceId: number;
  title: string;
  description: string;
  tech: string;
  type: string;
}

const Projects = ({ experienceId }: ProjectsProps) => {
  const { t } = useTranslation();
  const allProjects = t('work.projects', { returnObjects: true }) as Project[];

  // Filter projects depending on experienceId
  const projects = experienceId
    ? allProjects.filter(p => p.experienceId === experienceId)
    : allProjects;

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <h2 className="section-title">
          {experienceId ? t('work.relatedProjects') : t('work.title')}
        </h2>

        {projects.length > 0 ? (
          <div className="projects-grid">
            {projects.map((project) => (
              <div
                key={project.id}
                className="project-card"
              >
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <p className="project-tech">{project.tech}</p>
              </div>
            ))}
          </div>
        ) : (
          <p style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>{t('work.noProjects')}</p>
        )}
      </div>
    </section>
  )
}

export default Projects
