import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import './Hero.css'

const Hero = () => {
  const { t } = useTranslation()

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Kemalettin Sargın
        </h1>

        <h2 className="hero-role">{t('hero.title')}</h2>

        <p className="hero-subtitle">
          {t('hero.subtitle')}
        </p>

        <p className="hero-description">
          {t('hero.description')}
        </p>
        <div className="hero-cta">
          <Link to="/timeline" className="btn btn-primary">
            {t('hero.viewTimeline')}
          </Link>
          <a href="#contact" className="btn btn-secondary">{t('hero.contact')}</a>
        </div>
      </div>
    </section>
  )
}

export default Hero
