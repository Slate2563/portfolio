interface OutcomeCardProps {
  number: number
  title: string
  description: string
}

function OutcomeCard({
  number,
  title,
  description,
}: OutcomeCardProps) {
  return (
    <article className="rounded-large border border-border bg-surface p-6 transition-standard hover-lift">
      <span className="font-mono text-sm text-accent">
        OUTCOME {String(number).padStart(2, '0')}
      </span>

      <h3 className="mt-4 font-display text-lg font-semibold">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-text-secondary">
        {description}
      </p>
    </article>
  )
}

export default OutcomeCard