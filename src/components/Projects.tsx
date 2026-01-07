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
    {
      "id": 102,
      "experienceId": 1,
      "title": "Business Dashboard & Management Web App",
      "description": "Designed a web-based dashboard for business reporting and role-based authorization, including an upgrade of the frontend from Angular 11 to 15.",
      "tech": ".NET Core • Angular • EF Core • SQL Server",
      "type": "Web"
    },
    {
      "id": 103,
      "experienceId": 2,
      "title": "O-mega (Construction Management)",
      "description": "An enterprise-level construction site management application. Originally started with Java and later migrated to Kotlin using MVVM architecture[cite: 67, 68, 69].",
      "tech": "Android • Kotlin • Room • MVVM • Retrofit • Firebase [cite: 70]",
      "type": "Mobile"
    },
    {
      "id": 104,
      "experienceId": 2,
      "title": "Pbt Pro (Corporate Asset & Maintenance)",
      "description": "A corporate asset and maintenance management software sharing the same codebase as O-mega but with distinct modules and UI[cite: 67, 68].",
      "tech": "Android • Kotlin • .NET Web API 2 • Dapper • SQL Server [cite: 72, 73]",
      "type": "Mobile & Backend"
    },
    {
      "id": 105,
      "experienceId": 2,
      "title": "AtsPro (Fleet Tracking System)",
      "description": "A vehicle fleet tracking system featuring automated license plate recognition via Google Vision API[cite: 75].",
      "tech": "Kotlin • Google Play Services Vision • Firebase • Retrofit [cite: 77]",
      "type": "Mobile"
    },
    {
      "id": 106,
      "experienceId": 2,
      "title": "Fixed Asset Management (Demirbaş Yönetimi)",
      "description": "An application for managing inventory that connects to thermal barcode printers via Bluetooth for label printing[cite: 78, 79].",
      "tech": "Kotlin • Kodein-DI • Bluetooth Printing • Google Vision API [cite: 80]",
      "type": "Mobile"
    },
    {
      "id": 107,
      "experienceId": 3,
      "title": "Bursadabugün Media Suite",
      "description": "Developed full-featured news, radio, and TV streaming applications for both phone and tablet versions from scratch[cite: 45, 47, 49].",
      "tech": "Android • Java • aacdecoder • Play Services Ads • SlidingMenu [cite: 46, 48, 50]",
      "type": "Mobile"
    },
    {
      "id": 108,
      "experienceId": 3,
      "title": "BKM Kitap",
      "description": "The official mobile application for one of Turkey's major bookstores, focusing on retail and user engagement[cite: 21].",
      "tech": "Android • Java • Retrofit • Gson • Firebase Messaging [cite: 22]",
      "type": "Mobile"
    },
    {
      "id": 109,
      "experienceId": 3,
      "title": "Samam (Smart Kitchen IoT)",
      "description": "An intelligent kitchen application developed for a Qatar-based company, featuring gas leak detection and environmental controls.",
      "tech": "Android • Eclipse-Paho MQTT Client • Retrofit • Gson ",
      "type": "Mobile/IoT"
    },
    {
      "id": 110,
      "experienceId": 3,
      "title": "Kodlamasal",
      "description": "A Scratch-like block coding educational application designed for children[cite: 24].",
      "tech": "Android • libgdx • Firebase Auth • Firebase Database [cite: 25]",
      "type": "Mobile/Education"
    },
    {
      "id": 111,
      "experienceId": 3,
      "title": "Buca Engelsiz Rota",
      "description": "A navigation app for the visually impaired that uses GPS to calculate nearby objects and provides voice guidance[cite: 60, 61, 62].",
      "tech": "Android • Google Maps API • Play Services Location [cite: 63]",
      "type": "Mobile"
    },
    {
      "id": 112,
      "experienceId": 3,
      "title": "Neo (Nilüfer Etkinlik Oyunları)",
      "description": "A competition app where users earn points by answering questions via QR codes at event locations[cite: 28].",
      "tech": "Android • OkHttp • Play Services Vision • Robospice [cite: 29]",
      "type": "Mobile"
    },
    {
      "id": 113,
      "experienceId": 3,
      "title": "Tofaş Spor Official",
      "description": "The official Android application for Tofaş Sports Club, providing news and updates[cite: 36].",
      "tech": "Android • Java • Retrofit • Google Play Services [cite: 36]",
      "type": "Mobile"
    },
    {
      "id": 114,
      "experienceId": 3,
      "title": "Bursaspor Mobile",
      "description": "Rewrote the existing application with code improvements and integrated online radio for both tablet and phone versions[cite: 39].",
      "tech": "Android • Java • OkHttp • Google Play Services Analytics [cite: 40, 41]",
      "type": "Mobile"
    },
    {
      "id": 115,
      "experienceId": 3,
      "title": "Olay Haber",
      "description": "A comprehensive news application with YouTube and Dailymotion video integrations[cite: 51, 52].",
      "tech": "Android • OkHttp • YouTube Android Library • Fabric [cite: 52]",
      "type": "Mobile"
    },
    {
      "id": 116,
      "experienceId": 3,
      "title": "Fixture Maker",
      "description": "A league and tournament management app with a complex SQLite database consisting of 12 tables[cite: 55].",
      "tech": "Android • SQLite • Facebook SDK • Play Services Ads [cite: 55, 57]",
      "type": "Mobile"
    },
    {
      "id": 117,
      "experienceId": 3,
      "title": "Buca Vatandaş Katılım",
      "description": "A citizen participation app allowing users to report location-based issues by attaching photos[cite: 37].",
      "tech": "Android • ArcGIS Android SDK • Maps API • Retrofit2 [cite: 38]",
      "type": "Mobile"
    },
    {
      "id": 118,
      "experienceId": 3,
      "title": "Municipal Applications (Nilüfer & Odunpazarı)",
      "description": "Developed and maintained official municipal service applications for regional governments[cite: 26, 44].",
      "tech": "Android • OkHttp • Retrofit • Google Maps [cite: 27, 44]",
      "type": "Mobile"
    },
    {
      "id": 119,
      "experienceId": 3,
      "title": "Hayvancılık Akademisi",
      "description": "An educational application dedicated to animal husbandry and agricultural training[cite: 30].",
      "tech": "Android • Retrofit • Gson • Universal Image Loader [cite: 33, 35]",
      "type": "Mobile"
    },
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
