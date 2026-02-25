import Script from 'next/script'
import '../index.css'
import AppShell from './AppShell'

export const metadata = {
  title: 'Fabriquer votre carte électronique - EVIACORE',
  description: 'Plateforme de services PCB et assemblage electronique.',
  metadataBase: new URL('https://eviacore.com'),
  alternates: {
    languages: {
      fr: '/fr',
      en: '/en',
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <Script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="ecf1da71-1804-4387-9e96-5c5556b44d67"
          data-blockingmode="auto"
          strategy="beforeInteractive"
        />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-2JW9WRHVF7"
          strategy="afterInteractive"
          data-cookieconsent="statistics"
        />
        <Script
          id="ga4-init"
          strategy="afterInteractive"
          data-cookieconsent="statistics"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-2JW9WRHVF7');`,
          }}
        />
      </head>
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  )
}
