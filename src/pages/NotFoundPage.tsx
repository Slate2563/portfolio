
import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <section className="site-container section-spacing text-center">
      <p className="font-mono text-sm text-accent">
        ERROR 404
      </p>

      <h1 className="mt-4 font-display text-4xl font-bold">
        Page not found.
      </h1>

      <p className="mt-4 text-text-secondary">
        The page you are looking for does not exist.
      </p>

      <Link
        to="/"
        className="mt-8 inline-flex rounded-medium bg-accent px-6 py-3 font-semibold text-accent-foreground"
      >
        Return home
      </Link>
    </section>
  )
}

export default NotFoundPage
