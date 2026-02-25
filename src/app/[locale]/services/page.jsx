'use client'

import { useEffect } from 'react'
import Services from '../../../components/Services'
import ServicesHero from '../../../components/ServicesHero'

export default function ServicesPage() {
  useEffect(() => {
    document.body.classList.add('services-theme')
    return () => {
      document.body.classList.remove('services-theme')
    }
  }, [])

  return (
    <section className="page" id="services">
      <ServicesHero />
      <Services />
    </section>
  )
}
