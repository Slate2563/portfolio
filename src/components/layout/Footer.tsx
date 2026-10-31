
import Brand from '../common/Brand'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-container">
      <div className="flex flex-col items-center justify-between gap-5 border-t border-border py-8 sm:flex-row">
        <div className="flex flex-col items-center gap-2 sm:items-start">
          <Brand />

          <p className="text-xs text-text-muted">
            Designed and developed with care.
          </p>
        </div>

        <div className="flex flex-col items-center gap-2 sm:items-end">
          <a
            href="#home"
            className="text-sm text-text-secondary transition-standard hover:text-accent"
          >
            Back to top ↑
          </a>

          <p className="text-xs text-text-muted">
            © {currentYear} Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
