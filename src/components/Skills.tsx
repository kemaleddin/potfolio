import './Skills.css'

const Skills = () => {
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
    <section className="skills" id="skills">
      <div className="skills-container">
        <h2 className="section-title">Skills</h2>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="skill-item"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="skill-header">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-level">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
