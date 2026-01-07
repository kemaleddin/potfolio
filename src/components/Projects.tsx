import './Projects.css'

interface ProjectsProps {
  experienceId?: number;
}

const Projects = ({ experienceId }: ProjectsProps) => {
  const allProjects = [
    {
      "id": 101,
      "experienceId": 1,
      "title": "E-Commerce & Production Management System",
      "description": "Developed a comprehensive e-commerce and production management system with Clean Architecture, integrating PayTR and Kuveyt Türk payment gateways.",
      "tech": ".NET 8 • ASP.NET Core MVC • EF Core • PostgreSQL • CQRS • MediatR",
      "type": "Full-Stack"
    },
    // ... (rest of the projects array remains the same as user provided) ...
    {
      "id": 120,
      "experienceId": 3,
      "title": "Specialized News & Catalogs",
      "description": "Development of RTL-supported catalogs (Arian Design) and subscription-based digital newspapers (Çağdaş Gazete)[cite: 58, 59].",
      "tech": "Android • Java • Custom UI Components",
      "type": "Mobile"
    }
  ];

  const projects = experienceId
    ? allProjects.filter(p => p.experienceId === experienceId)
    : allProjects;

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <h2 className="section-title">
          {experienceId ? 'Related Projects' : 'Work'}
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
          <p style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>No projects found for this experience.</p>
        )}
      </div>
    </section>
  )
}

export default Projects
