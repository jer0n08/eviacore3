'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Script from 'next/script'
import { useLanguage } from '../contexts/LanguageContext'

function Contact() {
  const { language, t } = useLanguage()
  const [captchaError, setCaptchaError] = useState('')
  const [submitMessage, setSubmitMessage] = useState('')
  const [submitError, setSubmitError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const siteKey =
    globalThis?.process?.env?.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ||
    '6LfdM2YsAAAAAFf_HYPC4wE-yWleyzfnYC7Bojmp'
  const recaptchaWidgetId = useRef(null)

  const getRecaptchaClient = useCallback(() => {
    if (typeof window === 'undefined') return null
    if (!window.grecaptcha) return null
    return window.grecaptcha
  }, [])

  const renderRecaptcha = useCallback(() => {
    const recaptcha = getRecaptchaClient()
    if (!siteKey || !recaptcha) return
    recaptcha.ready(() => {
      if (recaptchaWidgetId.current !== null) {
        recaptcha.reset(recaptchaWidgetId.current)
        return
      }
      recaptchaWidgetId.current = recaptcha.render('recaptcha-badge', {
        sitekey: siteKey,
        badge: 'inline',
        size: 'invisible',
      })
    })
  }, [getRecaptchaClient, siteKey])

  useEffect(() => {
    renderRecaptcha()
  }, [language, renderRecaptcha])

  const handleSubmit = async (event) => {
    event.preventDefault()
    setSubmitMessage('')
    setSubmitError('')
    setCaptchaError('')
    if (!siteKey) {
      setCaptchaError(t('contact.form.recaptchaMissing'))
      return
    }
    const recaptcha = getRecaptchaClient()
    if (!recaptcha) {
      setCaptchaError(t('contact.form.recaptchaError'))
      return
    }
    setIsSubmitting(true)
    try {
    const widgetId = recaptchaWidgetId.current
    if (widgetId === null) {
      setCaptchaError(t('contact.form.recaptchaError'))
      return
    }
    const token = await recaptcha.execute(widgetId, { action: 'contact' })
      const response = await fetch('/contact.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message, token }),
      })
      const payload = await response.json().catch(() => null)
      if (!response.ok || !payload?.success) {
        setSubmitError(payload?.error || t('contact.form.submitError'))
        return
      }
      setSubmitMessage(t('contact.form.successMessage'))
      setName('')
      setEmail('')
      setMessage('')
    } catch {
      setSubmitError(t('contact.form.submitError'))
    } finally {
      setIsSubmitting(false)
    }
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
              src={`https://www.google.com/recaptcha/api.js?render=explicit&hl=${language}`}
              async
              defer
              onLoad={renderRecaptcha}
            />
          ) : null}
          <label className="grid gap-2 text-sm text-slate-300">
            {t('contact.form.name')}
            <input
              className="rounded-xl border border-white/10 bg-transparent px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-amber-300/40"
              type="text"
              placeholder={t('contact.form.namePlaceholder')}
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </label>
          <label className="grid gap-2 text-sm text-slate-300">
            {t('contact.form.email')}
            <input
              className="rounded-xl border border-white/10 bg-transparent px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-amber-300/40"
              type="email"
              placeholder={t('contact.form.emailPlaceholder')}
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>
          <label className="grid gap-2 text-sm text-slate-300">
            {t('contact.form.message')}
            <textarea
              className="min-h-36 resize-y rounded-xl border border-white/10 bg-transparent px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-amber-300/40"
              rows="4"
              placeholder={t('contact.form.messagePlaceholder')}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />
          </label>
          <div className="grid gap-2 text-sm text-slate-300">
            <span>{t('contact.form.recaptchaLabel')}</span>
            <div id="recaptcha-badge" />
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
            {submitError ? (
              <span className="text-xs text-amber-300">
                {submitError}
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
            disabled={isSubmitting}
            aria-busy={isSubmitting}
          >
            {isSubmitting ? t('contact.form.sending') : t('contact.form.submit')}
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
