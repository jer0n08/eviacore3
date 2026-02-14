'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowRight } from 'lucide-react'
import logo from '../assets/evia-logo.png'
import { useLanguage } from '../contexts/LanguageContext'

function Navbar() {
  const { language, setLanguage, t } = useLanguage()
  const [menuOpen, setMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(() => {
    if (typeof window === 'undefined') return false
    const current =
      window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
    return current > 8
  })
  const navRef = useRef(null)
  const [navHeight, setNavHeight] = useState(0)
  const pathname = usePathname()

  const navItems = [
    { label: t('nav.home'), href: '/' },
    { label: t('nav.services'), href: '/services' },
    { label: t('nav.contact'), href: '/contact' },
  ]

  const handleToggle = () => {
    setMenuOpen((open) => !open)
  }

  const handleNavigate = () => {
    setMenuOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      const current =
        window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
      setIsScrolled(current > 8)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    document.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    const id = requestAnimationFrame(() => setMenuOpen(false))
    return () => cancelAnimationFrame(id)
  }, [pathname])

  useEffect(() => {
    const updateHeight = () => {
      if (navRef.current) {
        setNavHeight(navRef.current.offsetHeight)
      }
    }
    updateHeight()
    window.addEventListener('resize', updateHeight)
    return () => window.removeEventListener('resize', updateHeight)
  }, [])

  return (
    <>
      <header
        ref={navRef}
        className={`navbar ${isScrolled ? 'is-scrolled' : 'at-top'}${pathname === '/' ? ' is-home' : ''}${menuOpen ? ' menu-open' : ''}`}
      >
        <div className="nav-inner container">
          <Link className="brand" href="/" onClick={handleNavigate}>
            <img src={logo.src} alt="Logo EVIACORE" />
          </Link>

          <nav className="nav-links">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={handleNavigate}
                className={pathname === item.href ? 'active' : ''}
                aria-current={pathname === item.href ? 'page' : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="nav-actions">
            <div className="lang-switch" role="group" aria-label={t('nav.lang')}>
              <button
                type="button"
                className={language === 'fr' ? 'active' : ''}
                onClick={() => setLanguage('fr')}
              >
                FR
              </button>
              <button
                type="button"
                className={language === 'en' ? 'active' : ''}
                onClick={() => setLanguage('en')}
              >
                EN
              </button>
            </div>
            <a
              className="nav-cta cta-arrow rounded-none"
              href="https://app.eviacore.com"
              target="_blank"
              rel="noreferrer"
              onClick={handleNavigate}
            >
              {t('nav.cta')}
              <ArrowRight className="cta-arrow-icon" size={16} aria-hidden="true" />
            </a>
          </div>

          <button
            className={`burger ${menuOpen ? 'open' : ''}`}
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={handleToggle}
          >
            <svg className="vbp-header-menu-button__svg" viewBox="0 0 100 100">
              <line
                x1="0"
                y1="50%"
                x2="100%"
                y2="50%"
                className="top"
                shapeRendering="crispEdges"
              />
              <line
                x1="0"
                y1="50%"
                x2="100%"
                y2="50%"
                className="middle"
                shapeRendering="crispEdges"
              />
              <line
                x1="0"
                y1="50%"
                x2="100%"
                y2="50%"
                className="bottom"
                shapeRendering="crispEdges"
              />
            </svg>
          </button>
        </div>

        <div className={`mobile-panel ${menuOpen ? 'open' : ''}`}>
          <nav>
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={handleNavigate}
                className={pathname === item.href ? 'active' : ''}
                aria-current={pathname === item.href ? 'page' : undefined}
              >
                {item.label}
              </Link>
            ))}
            <div className="lang-switch mobile-lang" role="group" aria-label={t('nav.lang')}>
              <button
                type="button"
                className={language === 'fr' ? 'active' : ''}
                onClick={() => setLanguage('fr')}
              >
                FR
              </button>
              <button
                type="button"
                className={language === 'en' ? 'active' : ''}
                onClick={() => setLanguage('en')}
              >
                EN
              </button>
            </div>
            <a
              className="mobile-cta cta-arrow rounded-none"
              href="https://app.eviacore.com"
              target="_blank"
              rel="noreferrer"
              onClick={handleNavigate}
            >
              {t('nav.cta')}
              <ArrowRight className="cta-arrow-icon" size={16} aria-hidden="true" />
            </a>
          </nav>
        </div>
      </header>
      <div className="navbar-spacer" style={{ height: navHeight }} aria-hidden="true" />
    </>
  )
}

export default Navbar
