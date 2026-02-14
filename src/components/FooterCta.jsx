'use client'

import { ArrowRight } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

function FooterCta() {
  const { t } = useLanguage()

  return (
    <section className="footer-cta-section">
      <div className="container footer-cta-inner">
        <p>{t('footer.ctaText')}</p>
        <a
          className="cta-arrow inline-flex h-12 items-center justify-center bg-[#F6C94A] px-6 text-sm font-semibold uppercase tracking-widest text-black shadow-lg"
          href="https://app.eviacore.com"
          target="_blank"
          rel="noreferrer"
        >
          {t('nav.cta')}
          <ArrowRight className="cta-arrow-icon" size={16} aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}

export default FooterCta
