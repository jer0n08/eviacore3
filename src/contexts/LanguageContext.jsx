'use client'

import { createContext, useContext, useMemo, useState } from 'react'
import translations from '../data/translations'

const LanguageContext = createContext(null)

const getValue = (source, path) =>
  path.split('.').reduce((acc, key) => (acc ? acc[key] : undefined), source)

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('fr')

  const value = useMemo(() => {
    const dict = translations[language] ?? translations.fr
    const t = (path) => getValue(dict, path) ?? path
    return { language, setLanguage, t }
  }, [language])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}
