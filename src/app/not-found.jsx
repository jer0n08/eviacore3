import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="page" id="not-found">
      <div className="container section-spacing">
        <div className="max-w-3xl">
          <p className="mb-4 text-xs uppercase tracking-widest text-slate-400">Erreur 404</p>
          <h1>Page introuvable</h1>
          <p className="lead">
            La page que vous cherchez n'existe pas ou a ete deplacee.
          </p>
          <Link
            className="inline-flex h-12 items-center justify-center bg-[#F6C94A] px-6 text-sm font-semibold uppercase tracking-widest text-black shadow-lg transition hover:-translate-y-0.5 hover:bg-[#F6C94A] hover:shadow-xl"
            href="/"
          >
            Retour a l'accueil
          </Link>
        </div>
      </div>
    </section>
  )
}
