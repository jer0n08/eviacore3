export async function generateMetadata({ params }) {
  const { locale } = await params
  const title = locale === 'en'
    ? 'Production steps - EVIACORE'
    : 'Les étapes de la production - EVIACORE'

  return { title }
}

export default function ServicesLayout({ children }) {
  return children
}
