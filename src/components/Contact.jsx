'use client'

import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

function Contact() {
  const { language, t } = useLanguage()
  const [antiSpamAnswer, setAntiSpamAnswer] = useState('')
  const [antiSpamError, setAntiSpamError] = useState('')
  const [submitMessage, setSubmitMessage] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const normalized = antiSpamAnswer.trim().replace(',', '.')
    if (normalized !== '5') {
      setAntiSpamError(t('contact.form.antiSpamError'))
      setSubmitMessage('')
      return
    }
    setAntiSpamError('')
    setSubmitMessage(t('contact.form.successMessage'))
  }

  return (
    <section className="section-spacing" id="contact" key={language}>
      <div className="mx-auto grid w-11/12 max-w-6xl gap-12 lg:grid-cols-2 lg:gap-14">
        <div>
          <p className="mb-4 text-xs uppercase tracking-widest text-slate-400">
            {t('contact.eyebrow')}
          </p>
          <h2 className="mb-4 font-mono text-4xl md:text-5xl leading-tight tracking-tight">
            {t('contact.title')}
          </h2>
          <p className="mb-8 text-base text-slate-300">
            {t('contact.lead')}
          </p>
          <div className="grid gap-5 text-slate-300">
            <div>
              <span className="text-xs uppercase tracking-widest text-slate-400">
                {t('contact.emailLabel')}
              </span>
              <p className="mt-2 text-base text-white">contact@eviacore.com</p>
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest text-slate-400">
                {t('contact.phoneLabel')}
              </span>
              <p className="mt-2 text-base text-white">+33 1 23 45 67 89</p>
            </div>
          </div>
        </div>
        <form
          className="grid gap-5 rounded-none border border-white/10 bg-neutral-950/70 p-7 shadow-2xl"
          onSubmit={handleSubmit}
        >
          <label className="grid gap-2 text-sm text-slate-300">
            {t('contact.form.name')}
            <input
              className="rounded-xl border border-white/10 bg-transparent px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-amber-300/40"
              type="text"
              placeholder={t('contact.form.namePlaceholder')}
            />
          </label>
          <label className="grid gap-2 text-sm text-slate-300">
            {t('contact.form.email')}
            <input
              className="rounded-xl border border-white/10 bg-transparent px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-amber-300/40"
              type="email"
              placeholder={t('contact.form.emailPlaceholder')}
            />
          </label>
          <label className="grid gap-2 text-sm text-slate-300">
            {t('contact.form.message')}
            <textarea
              className="min-h-36 resize-y rounded-xl border border-white/10 bg-transparent px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-amber-300/40"
              rows="4"
              placeholder={t('contact.form.messagePlaceholder')}
            />
          </label>
          <label className="grid gap-2 text-sm text-slate-300">
            {t('contact.form.antiSpamLabel')}
            <input
              className="rounded-xl border border-white/10 bg-transparent px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-amber-300/40"
              type="text"
              placeholder={t('contact.form.antiSpamPlaceholder')}
              aria-label={t('contact.form.antiSpamQuestion')}
              value={antiSpamAnswer}
              onChange={(event) => {
                setAntiSpamAnswer(event.target.value)
                if (antiSpamError) {
                  setAntiSpamError('')
                }
              }}
            />
            <span className="text-xs text-slate-400">
              {t('contact.form.antiSpamQuestion')}
            </span>
            {antiSpamError ? (
              <span className="text-xs text-amber-300">
                {antiSpamError}
              </span>
            ) : null}
          </label>
          {submitMessage ? (
            <p className="border border-amber-300/40 bg-amber-400/10 px-4 py-3 text-sm text-amber-300">
              {submitMessage}
            </p>
          ) : null}
          <button
            className="mt-2 inline-flex items-center justify-center bg-[#F6C94A] px-6 py-3 text-sm font-semibold uppercase tracking-widest text-neutral-900 shadow-lg"
            type="submit"
          >
            {t('contact.form.submit')}
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
