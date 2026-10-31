import {
  ArrowUpRight,
  CheckCircle2,
} from 'lucide-react'

interface FeatureCardProps {
  title: string
  description: string
}

function FeatureCard({
  title,
  description,
}: FeatureCardProps) {
  return (
    <article className="group rounded-large border border-border bg-surface p-6 transition-standard hover-lift">

      <div className="flex items-center justify-between">
        <CheckCircle2
          size={22}
          className="text-accent"
          aria-hidden="true"
        />

        <ArrowUpRight
          size={18}
          className="text-text-muted transition-standard group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent"
          aria-hidden="true"
        />
      </div>

      <h3 className="mt-6 font-display text-lg font-semibold">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-text-secondary">
        {description}
      </p>

    </article>
  )
}

export default FeatureCard