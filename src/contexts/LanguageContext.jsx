'use client'

import { createContext, useContext, useEffect, useMemo } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import translations from '../data/translations'

const LanguageContext = createContext(null)
const supportedLanguages = ['fr', 'en']
const defaultLanguage = 'fr'

const getValue = (source, path) =>
  path.split('.').reduce((acc, key) => (acc ? acc[key] : undefined), source)

const getLanguageFromPath = (pathname) => {
  const segment = pathname.split('/')[1]
  return supportedLanguages.includes(segment) ? segment : defaultLanguage
}

export function LanguageProvider({ children }) {
  const pathname = usePathname() || '/'
  const searchParams = useSearchParams()
  const router = useRouter()
  const language = useMemo(() => getLanguageFromPath(pathname), [pathname])

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language
    }
  }, [language])

  const value = useMemo(() => {
    const dict = translations[language] ?? translations[defaultLanguage]
    const t = (path) => getValue(dict, path) ?? path
    const setLanguage = (nextLanguage) => {
      if (!nextLanguage) return
      const target = supportedLanguages.includes(nextLanguage)
        ? nextLanguage
        : defaultLanguage
      if (target === language) return

      const segments = pathname.split('/')
      if (segments.length > 1 && segments[segments.length - 1] === '') {
        segments.pop()
      }
      if (supportedLanguages.includes(segments[1])) {
        segments[1] = target
      } else {
        segments.splice(1, 0, target)
      }

      let nextPath = segments.join('/')
      if (!nextPath.startsWith('/')) {
        nextPath = `/${nextPath}`
      }
      const query = searchParams?.toString()
      if (query) {
        nextPath = `${nextPath}?${query}`
      }
      router.push(nextPath)
    }

    return { language, setLanguage, t }
  }, [language, pathname, router, searchParams])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}
