'use client'

import { useState } from 'react'
import Script from 'next/script'
import { useLanguage } from '../contexts/LanguageContext'

function Contact() {
  const { language, t } = useLanguage()
  const [captchaError, setCaptchaError] = useState('')
  const [submitMessage, setSubmitMessage] = useState('')
  const siteKey =
    globalThis?.process?.env?.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ||
    '6LfdM2YsAAAAAFf_HYPC4wE-yWleyzfnYC7Bojmp'

  const getRecaptchaClient = () => {
    if (typeof window === 'undefined') return null
    if (!window.grecaptcha) return null
    return window.grecaptcha
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!siteKey) {
      setCaptchaError(t('contact.form.recaptchaMissing'))
      setSubmitMessage('')
      return
    }
    const recaptcha = getRecaptchaClient()
    if (!recaptcha) {
      setCaptchaError(t('contact.form.recaptchaError'))
      setSubmitMessage('')
      return
    }
    try {
      const token = await recaptcha.execute(siteKey, { action: 'contact' })
      setCaptchaError('')
      const response = await fetch('/api/recaptcha', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token }),
      })
      const payload = await response.json().catch(() => null)
      if (!response.ok) {
        const detail = payload?.error ? ` (${payload.error})` : ''
        setCaptchaError(`${t('contact.form.recaptchaError')}${detail}`)
        setSubmitMessage('')
        return
      }
    } catch (_error) {
      setCaptchaError(t('contact.form.recaptchaError'))
      setSubmitMessage('')
      return
    }
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
          {siteKey ? (
            <Script
              key={language}
              src={`https://www.google.com/recaptcha/api.js?render=${siteKey}&hl=${language}`}
              async
              defer
            />
          ) : null}
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
          <div className="grid gap-2 text-sm text-slate-300">
            <span>{t('contact.form.recaptchaLabel')}</span>
            {!siteKey ? (
              <span className="text-xs text-amber-300">
                {t('contact.form.recaptchaMissing')}
              </span>
            ) : null}
            {captchaError ? (
              <span className="text-xs text-amber-300">
                {captchaError}
              </span>
            ) : null}
          </div>
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
