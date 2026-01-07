import { Link } from 'react-router-dom'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Kemalettin Sargın
        </h1>

        <h2 className="hero-role">Full-Stack Software Developer</h2>

        <p className="hero-subtitle">
          .NET Core • ASP.NET Core MVC • Angular • Android
        </p>

        <p className="hero-description">
          Experienced in building scalable and maintainable applications used by real users in production.
        </p>
        <div className="hero-cta">
          <Link to="/timeline" className="btn btn-primary">
            View Experience Timeline
          </Link>
          <a href="#contact" className="btn btn-secondary">Contact</a>
        </div>
      </div>
    </section>
  )
}

export default Hero
