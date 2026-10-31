
import { Outlet } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'

function SiteLayout() {
  return (
    <div className="min-h-screen">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-medium focus:bg-accent focus:px-4 focus:py-3 focus:text-accent-foreground"
      >
        Skip to main content
      </a>

      <Header />

      <main id="main-content">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default SiteLayout
