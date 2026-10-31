import type { ReactNode } from 'react'

interface CaseStudySectionProps {
  eyebrow: string
  title: string
  children: ReactNode
  id?: string
}

function CaseStudySection({
  eyebrow,
  title,
  children,
  id,
}: CaseStudySectionProps) {
  return (
    <section
      id={id}
      className="border-t border-border py-8 sm:py-10 lg:py-12"
    >
      <p className="font-mono text-xs tracking-wider text-accent">
        {eyebrow}
      </p>

      <h2 className="mt-4 font-display text-2xl font-semibold leading-tight sm:text-3xl">
        {title}
      </h2>

      <div className="mt-4 max-w-3xl text-sm leading-7 text-text-secondary sm:text-base sm:leading-8">
        {children}
      </div>
    </section>
  )
}

export default CaseStudySection