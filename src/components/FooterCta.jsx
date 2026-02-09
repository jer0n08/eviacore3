'use client'

import { useLanguage } from '../contexts/LanguageContext'

function FooterCta() {
  const { t } = useLanguage()

  return (
    <section className="footer-cta-section">
      <div className="container footer-cta-inner">
        <p>{t('footer.ctaText')}</p>
        <a
          className="inline-flex h-12 items-center justify-center bg-[#F6C94A] px-6 text-sm font-semibold uppercase tracking-widest text-black shadow-lg transition hover:-translate-y-0.5 hover:bg-[#F6C94A] hover:shadow-xl"
          href="https://app.eviacore.com"
          target="_blank"
          rel="noreferrer"
        >
          {t('nav.cta')}
        </a>
      </div>
    </section>
  )
}

export default FooterCta
