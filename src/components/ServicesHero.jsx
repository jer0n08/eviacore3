'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import servicesHeroImage from '../assets/evia-services-hero.png'

function ServicesHero() {
  const { language, t } = useLanguage()
  const tags = t('servicesHero.tags')

  return (
    <section className="services-hero" id="services-hero" key={language}>
      <div className="relative z-10 flex flex-col items-center gap-8 text-center">
        <div className="services-hero-visual">
          <img
            src={servicesHeroImage.src}
            alt={t('servicesHero.imageAlt')}
            loading="lazy"
            draggable="false"
          />
        </div>
        <div className="max-w-6xl px-6 md:px-10">
          <p className="eyebrow">{t('servicesHero.eyebrow')}</p>
          <h1 className="hero-title mb-5 font-mono leading-none tracking-tight">
            {t('servicesHero.title')}
          </h1>
          <p className="lead">{t('servicesHero.lead')}</p>
          <div className="services-hero-tags justify-center">
            {tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <div className="hero-actions justify-center">
            <Link
              className="cta-arrow inline-flex h-12 items-center justify-center bg-[#F6C94A] px-6 text-sm font-semibold uppercase tracking-widest text-black shadow-lg"
              href="https://app.eviacore.com"
              target="_blank"
              rel="noreferrer"
            >
              {t('servicesHero.primaryCta')}
              <ArrowRight className="cta-arrow-icon" size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesHero
