import './Contact.css'
import { Mail, Github, Linkedin, MessageCircle, Phone } from 'lucide-react'

const Contact = () => {
  const links = [
    { label: 'Email', href: 'mailto:kemalettin.sargin@gmail.com', icon: <Mail size={16} /> },
    { label: 'GitHub', href: 'https://github.com/kemaleddin', icon: <Github size={16} /> },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/kemalettinsargın', icon: <Linkedin size={16} /> },
    { label: 'WhatsApp', href: 'https://wa.me/+905344954542', icon: <MessageCircle size={16} /> },
    { label: 'Call', href: 'tel:+905344954542', icon: <Phone size={16} /> },
  ]

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h2 className="section-title">Get in Touch</h2>
        <p className="contact-description">
          Open to discussing new projects and opportunities.
        </p>

        <div className="contact-links">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="contact-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
            >
              <span className="contact-icon">{link.icon}</span>
              <span className="contact-label">{link.label}</span>
            </a>
          ))}
        </div>

        <footer className="footer">
          <p className="footer-text">
            ©{new Date().getFullYear()} Kemalettin Sargın
          </p>
        </footer>
      </div>
    </section>
  )
}

export default Contact
