'use client'

import { ArrowRight } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

function Hero() {
  const { language, t } = useLanguage()
  const titleText = t('hero.title')

  return (
    <section className="pt-28 pb-28" id="accueil" key={language}>
      <div className="relative z-10 flex flex-col items-center gap-8 px-6 md:px-10 text-center">
        <div className="max-w-6xl">
          <h1
            className="hero-title mb-5 font-mono text-14xl leading-none tracking-tight select-none"
            aria-label={titleText}
          >
            {titleText}
          </h1>
          <p className="mb-6 text-lg text-slate-300">
            {t('hero.lead')}
          </p>
          <div className="mb-8 flex flex-wrap justify-center gap-4">
            <a
              className="cta-arrow inline-flex h-12 items-center justify-center bg-[#F6C94A] px-6 text-sm font-semibold uppercase tracking-widest text-neutral-900 shadow-lg"
              href="https://app.eviacore.com"
              target="_blank"
              rel="noreferrer"
            >
              {t('hero.primaryCta')}
              <ArrowRight className="cta-arrow-icon" size={16} aria-hidden="true" />
            </a>
            <a
              className="cta-arrow inline-flex h-12 items-center justify-center border border-white/10 bg-transparent px-6 text-sm font-semibold uppercase tracking-widest text-white"
              href={`/${language}/services`}
            >
              {t('hero.secondaryCta')}
              <ArrowRight className="cta-arrow-icon" size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
