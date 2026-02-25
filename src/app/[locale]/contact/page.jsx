'use client'

import { useEffect } from 'react'
import Contact from '../../../components/Contact'

export default function ContactPage() {
  useEffect(() => {
    document.body.classList.add('services-theme')
    return () => {
      document.body.classList.remove('services-theme')
    }
  }, [])

  return (
    <section className="page" id="contact">
      <Contact />
    </section>
  )
}
