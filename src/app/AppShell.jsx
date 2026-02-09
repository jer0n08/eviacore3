'use client'

import { useRef } from 'react'
import { usePathname } from 'next/navigation'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FooterCta from '../components/FooterCta'
import { LanguageProvider } from '../contexts/LanguageContext'

function AppShell({ children }) {
  const footerRef = useRef(null)
  const pathname = usePathname()
  const hideFooterCta = [
    '/cgv',
    '/mentions-legales',
    '/privacy-policy',
  ].includes(pathname)

  return (
    <LanguageProvider>
      <div className="app">
        <Navbar />
        <main>
          {children}
          {hideFooterCta ? null : <FooterCta />}
        </main>
        <Footer ref={footerRef} />
      </div>
    </LanguageProvider>
  )
}

export default AppShell
