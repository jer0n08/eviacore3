'use client'

import { useEffect } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import setupIcon from '../assets/services-step-setup.png'
import settingsIcon from '../assets/services-step-settings.png'
import trackIcon from '../assets/services-step-track.png'
import deliveryIcon from '../assets/services-step-delivery.png'
import rightChevron from '../assets/right-chevron.png'

function Services() {
  const { language, t } = useLanguage()
  const steps = t('services.steps.items')
  const timelineSteps = t('services.timelineOnline.items')
  const timelineStepsFabrication = t('services.timelineFabrication.items')
  const timelineTitle = t('services.timelineOnline.title')
  const fabricationTitle = t('services.timelineFabrication.title')
  const timelinePairs = timelineSteps.reduce((rows, step, index) => {
    if (index % 2 === 0) {
      rows.push([step])
    } else {
      rows[rows.length - 1].push(step)
    }
    return rows
  }, [])
  const timelinePairsFabrication = timelineStepsFabrication.reduce((rows, step, index) => {
    if (index % 2 === 0) {
      rows.push([step])
    } else {
      rows[rows.length - 1].push(step)
    }
    return rows
  }, [])

  useEffect(() => {
    let ctx
    let ScrollTrigger
    let gsap
    let active = true

    const run = async () => {
      const gsapModule = await import('gsap')
      const scrollModule = await import('gsap/ScrollTrigger')
      gsap = gsapModule.default ?? gsapModule.gsap ?? gsapModule
      ScrollTrigger = scrollModule.ScrollTrigger ?? scrollModule.default ?? scrollModule
      gsap.registerPlugin(ScrollTrigger)

      if (!active) {
        return
      }

      const pairedSections = gsap.utils.toArray(
        '.timeline-section.is-paired'
      )
      const timelineRows = gsap.utils.toArray(
        '.timeline-section.is-paired .process-row'
      )
      const simpleSteps = gsap.utils.toArray(
        '.timeline-section:not(.is-paired) .process-steps'
      )
      if (!timelineRows.length && !simpleSteps.length) {
        return
      }

      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches

      ctx = gsap.context(() => {
        if (prefersReducedMotion) {
          const pairedItems = gsap.utils.toArray(
            '.timeline-section.is-paired .process-steps'
          )
          gsap.set(pairedItems, { opacity: 1, y: 0, x: 0 })
          gsap.set(timelineRows, { '--line-scale': 1, '--line-opacity': 1 })
          gsap.set(simpleSteps, { opacity: 1, y: 0 })
          return
        }

        if (pairedSections.length) {
          const isMobile = window.matchMedia('(max-width: 1024px)').matches
          pairedSections.forEach((section) => {
            const rows = gsap.utils.toArray(
              section.querySelectorAll('.process-row')
            )
            if (!rows.length) {
              return
            }

            const items = []
            rows.forEach((row) => {
              const left = row.querySelector('.process-steps.left')
              const right = row.querySelector('.process-steps.right')
              if (left) items.push(left)
              if (right) items.push(right)
            })

            gsap.set(items, {
              opacity: 0,
              y: 0,
              x: (index, element) =>
                element.classList.contains('left') ? -60 : 60,
            })
            gsap.set(rows, { '--line-scale': 0, '--line-opacity': 0 })

             if (isMobile) {
               ScrollTrigger.batch(rows, {
                 start: 'top 100%',
                 onEnter: (batch) => {
                   batch.forEach((row) => {
                     const left = row.querySelector('.process-steps.left')
                     const right = row.querySelector('.process-steps.right')
                     gsap.to(row, {
                       '--line-scale': 1,
                       '--line-opacity': 1,
                       duration: 0.35,
                       ease: 'power2.out',
                     })
                     if (left) {
                       gsap.to(left, {
                         opacity: 1,
                         x: 0,
                         duration: 0.5,
                         ease: 'power2.out',
                       })
                     }
                     if (right) {
                       gsap.to(right, {
                         opacity: 1,
                         x: 0,
                         duration: 0.5,
                         ease: 'power2.out',
                       })
                     }
                   })
                 },
                 onLeaveBack: (batch) => {
                   batch.forEach((row) => {
                     const left = row.querySelector('.process-steps.left')
                     const right = row.querySelector('.process-steps.right')
                     gsap.to(row, {
                       '--line-scale': 0,
                       '--line-opacity': 0,
                       duration: 0.25,
                       ease: 'power2.in',
                     })
                     if (left) {
                       gsap.to(left, {
                         opacity: 0,
                         x: -60,
                         duration: 0.35,
                         ease: 'power2.in',
                       })
                     }
                     if (right) {
                       gsap.to(right, {
                         opacity: 0,
                         x: 60,
                         duration: 0.35,
                         ease: 'power2.in',
                       })
                     }
                   })
                 },
               })
             } else {
              const stepDistance = Math.max(100, window.innerHeight * 0.16)
               const navOffset = 96
               const tl = gsap.timeline({
                 scrollTrigger: {
                   trigger: section,
                   start: `top top+=${navOffset}`,
                   end: `+=${items.length * stepDistance}`,
                    pin: true,
                    pinSpacing: true,
                    scrub: 0.25,
                    anticipatePin: 1,
                 },
               })

              rows.forEach((row) => {
                const left = row.querySelector('.process-steps.left')
                const right = row.querySelector('.process-steps.right')
                tl.to(row, {
                  '--line-scale': 1,
                  '--line-opacity': 1,
                  duration: 0.35,
                  ease: 'power2.out',
                })
                if (left) {
                  tl.to(left, {
                    opacity: 1,
                    x: 0,
                    duration: 0.6,
                    ease: 'power2.out',
                  })
                }
                if (right) {
                  tl.to(right, {
                    opacity: 1,
                    x: 0,
                    duration: 0.6,
                    ease: 'power2.out',
                  })
                }
              })
            }
          })
        }

         if (simpleSteps.length) {
          gsap.set(simpleSteps, { opacity: 0, y: 18 })

          ScrollTrigger.batch(simpleSteps, {
            start: 'top 80%',
            onEnter: (batch) => {
              gsap.to(batch, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: 'power2.out',
                stagger: 0.12,
              })
            },
            onLeaveBack: (batch) => {
              gsap.to(batch, {
                opacity: 0,
                y: 18,
                duration: 0.4,
                ease: 'power2.in',
                stagger: 0.08,
              })
            },
          })
        }
      })
    }

    run()

    return () => {
      active = false
      if (ctx) {
        ctx.revert()
      }
      if (ScrollTrigger) {
        ScrollTrigger.refresh()
      }
    }
  }, [language])



  return (
    <section className="services" id="services" key={language}>
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">{t('services.steps.eyebrow')}</p>
          <h2>{t('services.steps.title')}</h2>
        </div>
        <div className="services-steps">
          {steps.map((step, index) => (
            <div key={step.title} className="services-step-item">
              <article className="services-step-card">
                <div className="services-step-icon" aria-hidden="true">
                  {index === 0 && (
                    <img src={setupIcon.src} alt="" aria-hidden="true" loading="lazy" draggable="false" />
                  )}
                  {index === 1 && (
                    <img
                      src={settingsIcon.src}
                      alt=""
                      aria-hidden="true"
                      loading="lazy"
                      draggable="false"
                    />
                  )}
                  {index === 2 && (
                    <img src={trackIcon.src} alt="" aria-hidden="true" loading="lazy" draggable="false" />
                  )}
                  {index === 3 && (
                    <img
                      src={deliveryIcon.src}
                      alt=""
                      aria-hidden="true"
                      loading="lazy"
                      draggable="false"
                    />
                  )}
                </div>
                <div className="services-step-text">
                  <h3>
                    <span className="services-step-count">{index + 1}</span>
                    {step.title}
                  </h3>
                  <p>{step.text}</p>
                </div>
              </article>
              {index < steps.length - 1 && (
                <span
                  className={`services-step-arrow${index === 1 ? ' is-mid' : ''}`}
                  aria-hidden="true"
                >
                  <img
                    src={rightChevron.src}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    draggable="false"
                  />
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
        <section className="timeline-section widget_1744292857459 is-paired">
          <div className="container">
            <div className="heading">
              <h2>{timelineTitle}</h2>
            </div>
            <div className="main-content">
              {timelinePairs.map((pair, rowIndex) => (
                <div key={`pair-${rowIndex}`} className="process-row">
                  <div className="process-steps left">
                    {pair[0] && (
                      <>
                        <div className="text">
                          <h3>
                            <span className="step-count" /> {pair[0].title}
                          </h3>
                          <div className="description">
                            <p>{pair[0].text}</p>
                          </div>
                        </div>
                        <span className="timeline-step-dot">
                          {String(rowIndex * 2 + 1).padStart(2, '0')}
                        </span>
                      </>
                    )}
                  </div>
                  <div className="process-steps right">
                    {pair[1] && (
                      <>
                        <div className="text">
                          <h3>
                            <span className="step-count" /> {pair[1].title}
                          </h3>
                          <div className="description">
                            <p>{pair[1].text}</p>
                          </div>
                        </div>
                        <span className="timeline-step-dot">
                          {String(rowIndex * 2 + 2).padStart(2, '0')}
                        </span>
                      </>
                    )}
                  </div>
            </div>
          ))}
        </div>
          </div>
        </section>
        <section className="timeline-section widget_1744292857459 is-paired">
          <div className="container">
            <div className="heading">
              <h2>{fabricationTitle}</h2>
            </div>
            <div className="main-content">
              {timelinePairsFabrication.map((pair, rowIndex) => (
                <div key={`fabrication-pair-${rowIndex}`} className="process-row">
                  <div className="process-steps left">
                    {pair[0] && (
                      <>
                        <div className="text">
                          <h3>
                            <span className="step-count" /> {pair[0].title}
                          </h3>
                          <div className="description">
                            <p>{pair[0].text}</p>
                          </div>
                        </div>
                        <span className="timeline-step-dot">
                          {String(rowIndex * 2 + 1).padStart(2, '0')}
                        </span>
                      </>
                    )}
                  </div>
                  <div className="process-steps right">
                    {pair[1] && (
                      <>
                        <div className="text">
                          <h3>
                            <span className="step-count" /> {pair[1].title}
                          </h3>
                          <div className="description">
                            <p>{pair[1].text}</p>
                          </div>
                        </div>
                        <span className="timeline-step-dot">
                          {String(rowIndex * 2 + 2).padStart(2, '0')}
                        </span>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
    </section>
  )
}

export default Services
