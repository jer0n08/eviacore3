'use client'

import { useEffect } from 'react'
import { CircuitBoard, ClipboardList, FileChartColumn } from 'lucide-react'
import Hero from '../components/Hero'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion'
import { useLanguage } from '../contexts/LanguageContext'

export default function HomePage() {
  const { t } = useLanguage()
  const overview = t('home.overview')
  const support = t('home.support')
  const faq = t('home.faq')

  useEffect(() => {
    document.body.classList.add('home-theme')
    return () => {
      document.body.classList.remove('home-theme')
    }
  }, [])

    return (
      <>
        <Hero />
        <section className="section-spacing">
          <div className="mx-auto w-11/12 max-w-6xl">
            <div className="mb-10 max-w-3xl">
              <p className="mb-4 text-xs uppercase tracking-widest text-slate-400">
                {support.eyebrow}
              </p>
              <h2 className="mb-4 font-mono text-3xl md:text-4xl tracking-tight">
                {support.title}
              </h2>
              <p className="text-base text-slate-300">{support.lead}</p>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              <article className="rounded-none border border-white/10 bg-neutral-950 p-7">
                <FileChartColumn className="mb-4 h-6 w-6 text-amber-300" aria-hidden="true" />
                <h3 className="mb-3 font-mono tracking-tight">
                  {support.cards[0].title}
                </h3>
                <p className="text-slate-300">{support.cards[0].text}</p>
              </article>
              <article className="rounded-none border border-white/10 bg-neutral-950 p-7">
                <CircuitBoard className="mb-4 h-6 w-6 text-amber-300" aria-hidden="true" />
                <h3 className="mb-3 font-mono tracking-tight">
                  {support.cards[1].title}
                </h3>
                <p className="text-slate-300">{support.cards[1].text}</p>
              </article>
              <article className="rounded-none border border-white/10 bg-neutral-950 p-7">
                <ClipboardList className="mb-4 h-6 w-6 text-amber-300" aria-hidden="true" />
                <h3 className="mb-3 font-mono tracking-tight">
                  {support.cards[2].title}
                </h3>
                <p className="text-slate-300">{support.cards[2].text}</p>
              </article>
            </div>
          </div>
        </section>
        <section className="section-spacing">
          <div className="mx-auto w-11/12 max-w-6xl">
            <div className="mb-10 max-w-2xl">
              <p className="mb-4 text-xs uppercase tracking-widest text-slate-400">
                {overview.eyebrow}
              </p>
              <h2 className="mb-4 font-mono text-3xl md:text-4xl tracking-tight">
                {overview.title}
              </h2>
              <p className="mb-6 text-lg text-slate-300">{overview.lead}</p>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {overview.cards.map((card) => (
                <article
                  key={card.title}
                  className="rounded-none border border-white/10 bg-neutral-950 p-7"
                >
                  <h3 className="mb-3 font-mono tracking-tight">
                    {card.title}
                  </h3>
                  <p className="text-slate-300">{card.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="section-spacing">
          <div className="mx-auto w-11/12 max-w-6xl">
            <div className="mb-10 max-w-2xl">
              <p className="mb-4 text-xs uppercase tracking-widest text-slate-400">
                {faq.eyebrow}
              </p>
              <h2 className="mb-4 font-mono text-3xl md:text-4xl tracking-tight">
                {faq.title}
              </h2>
              <p className="text-lg text-slate-300">{faq.lead}</p>
            </div>
            <Accordion type="single" collapsible className="space-y-4">
              {faq.items.map((item, index) => (
                <AccordionItem key={item.question} value={`faq-${index}`}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </>
    )
}
