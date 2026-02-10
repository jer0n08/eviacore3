'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { useLanguage } from '../contexts/LanguageContext'

function Hero() {
  const { language, t } = useLanguage()
  const titleText = t('hero.title')
  const [scrambledTitle, setScrambledTitle] = useState(titleText)
  const scrambleTlRef = useRef(null)
  const lastRevealRef = useRef(-1)
  const scrambleCharsRef = useRef([])

  const renderTitle = (text) =>
    text.split(/(VIA|PCBA)/g).map((part, index) => {
      if (part === 'VIA' || part === 'PCBA') {
        return (
          <span className="font-geist-pixel" key={`${part}-${index}`}>
            {part}
          </span>
        )
      }
      return <span key={`title-${index}`}>{part}</span>
    })

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    const initialTitle = titleText.toUpperCase()
    const initialId = requestAnimationFrame(() => setScrambledTitle(initialTitle))

    if (scrambleTlRef.current) {
      scrambleTlRef.current.kill()
      scrambleTlRef.current = null
    }


    if (reducedMotion) {
      return () => cancelAnimationFrame(initialId)
    }

    const characters = titleText
      .replace(/\s+/g, '')
      .toUpperCase()
      .split('')
      .filter((char, index, array) => array.indexOf(char) === index)
    const totalFrames = 60
    const duration = totalFrames / 60
    const state = { frame: 0 }

    scrambleCharsRef.current = titleText.split('').map((char) => {
      if (char === ' ') {
        return ' '
      }
      return characters[Math.floor(Math.random() * characters.length)]
    })
    lastRevealRef.current = -1

    scrambleTlRef.current = gsap.timeline({
      id: 'hero-title-scramble',
      defaults: { ease: 'none' },
    })
    scrambleTlRef.current.to(state, {
      frame: totalFrames,
      duration,
      onUpdate: () => {
        const revealCount = Math.floor(
          (state.frame / totalFrames) * titleText.length
        )
        if (revealCount === lastRevealRef.current) {
          return
        }
        lastRevealRef.current = revealCount
        const next = titleText
          .split('')
          .map((char, index) => {
            if (char === ' ') {
              return char
            }
            if (index < revealCount) {
              return char
            }
            return scrambleCharsRef.current[index]
          })
          .join('')

        setScrambledTitle(next)
      },
      onComplete: () => {
        setScrambledTitle(titleText)
      },
    })

    return () => {
      cancelAnimationFrame(initialId)
      if (scrambleTlRef.current) {
        scrambleTlRef.current.kill()
        scrambleTlRef.current = null
      }
    }
  }, [titleText])


  return (
    <section className="pt-28 pb-28" id="accueil" key={language}>
      <div className="relative z-10 flex flex-col items-center gap-8 px-6 md:px-10 text-center">
        <div className="max-w-6xl">
          <h1
            className="hero-title mb-5 font-mono text-14xl leading-none tracking-tight select-none"
            aria-label={titleText}
          >
            <span>{renderTitle(scrambledTitle)}</span>
          </h1>
          <p className="mb-6 text-lg text-slate-300">
            {t('hero.lead')}
          </p>
          <div className="mb-8 flex flex-wrap justify-center gap-4">
            <a
              className="inline-flex h-12 items-center justify-center bg-[#F6C94A] px-6 text-sm font-semibold uppercase tracking-widest text-neutral-900 shadow-lg transition hover:-translate-y-0.5 hover:bg-[#F6C94A] hover:shadow-xl"
              href="https://app.eviacore.com"
              target="_blank"
              rel="noreferrer"
            >
              {t('hero.primaryCta')}
            </a>
            <a
              className="inline-flex h-12 items-center justify-center border border-white/10 bg-transparent px-6 text-sm font-semibold uppercase tracking-widest text-white transition hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/5"
              href="/services"
            >
              {t('hero.secondaryCta')}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
