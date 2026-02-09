'use client'

import { forwardRef } from 'react'
import { ArrowUp } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

const Footer = forwardRef(function Footer(_props, ref) {
  const { language, t } = useLanguage()

  return (
    <footer className="footer" key={language} ref={ref}>
      <div className="container footer-inner">
        <div className="footer-meta">
          <p>{t('footer.tagline')}</p>
          <p className="footer-address">{t('footer.address')}</p>
        </div>
        <div className="footer-links">
          <a href="/cgv">{t('footer.cgv')}</a>
          <a href="/mentions-legales">{t('footer.legal')}</a>
          <a href="/privacy-policy">{t('footer.privacy')}</a>
        </div>
        <p className="footer-rights">{t('footer.rights')}</p>
      </div>
      <button
        className="scroll-top-button"
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Remonter en haut de la page"
      >
        <ArrowUp aria-hidden="true" size={16} />
      </button>
    </footer>
  )
})

export default Footer
