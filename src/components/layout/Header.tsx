
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

import ThemeToggle from '../common/ThemeToggle'
import useTheme from '../../hooks/useTheme'

import Brand from '../common/Brand'

const navigationItems = [
  { label: 'Home', href: '/#home' },
  { label: 'About', href: '/#about' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Contact', href: '/#contact' },
]

function Header() {
  const { theme, toggleTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  function closeMenu() {
    setIsMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-xl">
      <div className="site-container">
        <div className="flex min-h-20 items-center justify-between gap-6">

          {/* Brand */}
            <Brand
            onClick={closeMenu}
            className="shrink-0"
            />

          {/* Desktop navigation */}
          <nav
            aria-label="Main navigation"
            className="hidden md:block"
          >
            <ul className="flex items-center gap-6 lg:gap-8">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-text-secondary transition-standard hover:text-accent"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Header actions */}
          <div className="flex shrink-0 items-center gap-3">
            <ThemeToggle
              theme={theme}
              onToggle={toggleTheme}
            />

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setIsMenuOpen((current) => !current)}
              aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              className="inline-flex size-10 items-center justify-center rounded-full border border-border text-text-primary transition-standard hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent md:hidden"
            >
              {isMenuOpen ? (
                <X size={20} aria-hidden="true" />
              ) : (
                <Menu size={20} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile navigation */}
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          hidden={!isMenuOpen}
          className="border-t border-border py-4 md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={closeMenu}
                  className="block rounded-medium px-4 py-3 text-sm text-text-secondary transition-standard hover:bg-surface hover:text-accent"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
