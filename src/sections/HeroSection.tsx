
import { ArrowDown, ArrowUpRight, Code2 } from 'lucide-react'

function HeroSection() {
  return (
    <section
        id="home"
        aria-labelledby="hero-title"
        className="site-container section-spacing relative isolate overflow-hidden"
        >
        <div
            aria-hidden="true"
            className="hero-grid-background pointer-events-none absolute inset-0 -z-10"
        />

        <div
            aria-hidden="true"
            className="hero-glow pointer-events-none absolute -right-40 top-10 -z-10 size-96 rounded-full"
        />
      <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">

        {/* Hero introduction */}
        <div className="max-w-2xl">

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2">
            <span className="size-2 rounded-full bg-accent" />
            <span className="font-mono text-xs tracking-wide text-text-secondary">
              PERSONAL PORTFOLIO
            </span>
          </div>

          <p className="mb-4 font-mono text-sm text-accent">
            HELLO, WORLD. I'M
          </p>

          <h1
            id="hero-title"
            className="max-w-3xl font-display text-5xl font-bold leading-[1.05] tracking-[-0.04em] sm:text-6xl lg:text-7xl xl:text-8xl"
          >
            [Shein
            <span className="text-accent"> Yu</span>]
          </h1>

          <h2 className="mt-5 font-display text-xl font-semibold leading-relaxed text-text-secondary sm:text-2xl">
            [Junior Programmer]
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-text-secondary">
            I am a junior programmer interested in backend, full-stack, and mobile development. I enjoy building practical applications, solving problems, and creating clean, reliable software.
          </p>

          {/* Hero actions */}
          <div className="mt-9 flex flex-wrap items-center gap-4">

            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-medium bg-accent px-6 py-3 font-semibold text-accent-foreground transition-standard hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              View My Work
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-medium border border-border px-6 py-3 font-semibold text-text-primary transition-standard hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              Contact Me
            </a>

          </div>

          <a
            href="#about"
            className="mt-12 inline-flex items-center gap-2 text-sm text-text-muted transition-standard hover:text-accent"
          >
            Explore my portfolio
            <ArrowDown size={16} aria-hidden="true" />
          </a>
        </div>

        {/* Technical visual panel */}
        <div className="relative">

          <div className="absolute -inset-4 rounded-large bg-accent/5 blur-2xl" />

          <div className="relative overflow-hidden rounded-large border border-border bg-surface/95 shadow-soft backdrop-blur-xl transition-standard">

            {/* Panel header */}
            <div className="flex items-center justify-between border-b border-border px-5 py-4">

              <div className="flex items-center gap-2">
                <Code2 size={18} className="text-accent" />

                <span className="font-mono text-sm text-text-secondary">
                  development.ts
                </span>
              </div>

              <div className="flex items-center gap-1.5">
                <span className="size-2 rounded-full bg-red-400" />
                <span className="size-2 rounded-full bg-yellow-400" />
                <span className="size-2 rounded-full bg-green-400" />
              </div>
            </div>

            {/* Panel content */}
            <div className="space-y-8 p-6 sm:p-8">

              <div>
                <span className="font-mono text-xs text-accent">
                  01 / DESIGN
                </span>

                <h3 className="mt-2 font-display text-2xl font-semibold">
                  Think clearly.
                </h3>

                <p className="mt-2 text-sm leading-7 text-text-secondary">
                  Plan and architect with intention.
                </p>
              </div>

              <div className="border-t border-border pt-6">
                <span className="font-mono text-xs text-accent">
                  02 / ENGINEER
                </span>

                <h3 className="mt-2 font-display text-2xl font-semibold">
                  Build carefully.
                </h3>

                <p className="mt-2 text-sm leading-7 text-text-secondary">
                  Develop maintainable solutions.
                </p>
              </div>

              <div className="border-t border-border pt-6">
                <span className="font-mono text-xs text-accent">
                  03 / IMPROVE
                </span>

                <h3 className="mt-2 font-display text-2xl font-semibold">
                  Keep evolving.
                </h3>

                <p className="mt-2 text-sm leading-7 text-text-secondary">
                  Learn, refine, and improve continuously.
                </p>
              </div>

            </div>

            {/* Panel footer */}
            <div className="border-t border-border px-6 py-4">
              <p className="font-mono text-xs text-text-muted">
                &lt; BUILD / LEARN / CREATE / REPEAT / &gt;
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default HeroSection
