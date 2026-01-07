import './Contact.css'
import { Github, Linkedin, Mail, MessageCircle, Phone } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const Contact = () => {
  const { t } = useTranslation()
  const contactLinks = [
    { label: 'Email', href: 'mailto:kemalettin.sargin@gmail.com', icon: <Mail size={14} /> },
    { label: 'GitHub', href: 'https://github.com/kemaleddin', icon: <Github size={14} /> },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/kemalettinsargın', icon: <Linkedin size={14} /> },
    { label: 'WhatsApp', href: 'https://wa.me/+905344954542', icon: <MessageCircle size={14} /> },
    { label: 'Call', href: 'tel:+905344954542', icon: <Phone size={14} /> },
  ]

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h2 className="section-title">{t('contact.title')}</h2>
        <p className="contact-description">
          {t('contact.description')}
        </p>

        <div className="contact-links">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="contact-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact-icon">{link.icon}</span>
              {link.label}
            </a>
          ))}
        </div>

        <footer className="footer">
          <p className="footer-text">
            {t('contact.footer', { year: new Date().getFullYear() })}
          </p>
        </footer>
      </div>
    </section>
  )
}

export default Contact
