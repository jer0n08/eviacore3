import '../index.css'
import AppShell from './AppShell'

export const metadata = {
  title: 'EVIACORE',
  description: 'Plateforme de services PCB et assemblage electronique.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  )
}
