'use client'

import { forwardRef } from 'react'
import { ArrowUp } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

const Footer = forwardRef(function Footer(_props, ref) {
  const { language, t } = useLanguage()
  const localePrefix = `/${language}`

  const tagline = t('footer.tagline')
  const address = t('footer.address')
  const rights = t('footer.rights')
  const rightsLines = rights.split('\n')

  return (
    <footer className="footer" key={language} ref={ref}>
      <div className="container footer-inner">
        {tagline || address ? (
          <div className="footer-meta">
            {tagline ? <p>{tagline}</p> : null}
            {address ? <p className="footer-address">{address}</p> : null}
          </div>
        ) : null}
        <p className="footer-rights">
          {rightsLines.map((line, index) => (
            <span key={`${line}-${index}`}>
              {line}
              {index < rightsLines.length - 1 ? <br /> : null}
            </span>
          ))}
        </p>
        <div className="footer-links">
          <a href={`${localePrefix}/cgv`}>{t('footer.cgv')}</a>
          <a href={`${localePrefix}/mentions-legales`}>{t('footer.legal')}</a>
          <a href={`${localePrefix}/privacy-policy`}>{t('footer.privacy')}</a>
        </div>
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
