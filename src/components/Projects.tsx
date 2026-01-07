import './Projects.css'

const Projects = () => {
  const projects = [
    {
      title: 'Android Media & News Applications',
      description:
        'Developed and maintained multiple Android applications published on Google Play, including news, radio and TV streaming apps with thousands of active users.',
      tech: 'Android • Java • Kotlin • REST API'
    },
    {
      title: 'Enterprise Mobile Applications',
      description:
        'Contributed to enterprise-level Android applications by developing core features, improving performance, and integrating backend services.',
      tech: 'Android • Kotlin • MVVM'
    },
    {
      title: 'E-Commerce & Production Management System',
      description:
        'Developed a full-stack e-commerce and production management system. The frontend was built using ASP.NET Core MVC, while the backend services were designed with clean architecture and CQRS.',
      tech: 'ASP.NET Core MVC • .NET Core Web API • CQRS • MediatR • EF Core'
    },
    {
      title: 'Dashboard & Management Web Application',
      description:
        'Built a web-based dashboard application for business management, including reporting and role-based authorization.',
      tech: '.NET Core • Angular • EF Core • SQL'
    }
  ];


  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <h2 className="section-title">Work</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <p className="project-tech">{project.tech}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
