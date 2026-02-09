'use client'

import { useEffect } from 'react'
import { useLanguage } from '../../contexts/LanguageContext'

export default function PrivacyPolicyPage() {
  const { language, t } = useLanguage()
  const data = t('privacyPage')

  useEffect(() => {
    document.body.classList.add('home-theme')
    return () => {
      document.body.classList.remove('home-theme')
    }
  }, [])

  return (
    <section className="page" id="privacy-policy" key={language}>
      <div className="container section-spacing">
        <div className="mb-10 max-w-3xl">
          <p className="mb-4 text-xs uppercase tracking-widest text-slate-400">
            {data.eyebrow}
          </p>
          <h1>{data.title}</h1>
          <p className="lead">{data.lead}</p>
        </div>

        <div className="max-w-4xl">
          {data.sections.map((section) => (
            <div key={section.title}>
              <h2>{section.title}</h2>
              <p>
                {section.lines.map((line, index) => (
                  <span key={`${section.title}-${index}`}>
                    {line}
                    {index < section.lines.length - 1 ? <br /> : null}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
