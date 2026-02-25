export async function generateMetadata({ params }) {
  const { locale } = await params
  const title = locale === 'en'
    ? 'Contact Us - EVIACORE'
    : 'Contactez-Nous - EVIACORE'

  return { title }
}

export default function ContactLayout({ children }) {
  return children
}
