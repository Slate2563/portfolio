interface TechnicalDecisionCardProps {
  decision: string
  reason: string
  index: number
}

function TechnicalDecisionCard({
  decision,
  reason,
  index,
}: TechnicalDecisionCardProps) {
  return (
    <article className="rounded-large border border-border bg-surface p-6 transition-standard hover-lift">

      <span className="font-mono text-xs text-accent">
        DECISION {String(index + 1).padStart(2, '0')}
      </span>

      <h3 className="mt-4 font-display text-lg font-semibold">
        {decision}
      </h3>

      <div className="mt-5 border-t border-border pt-4">
        <p className="font-mono text-xs text-text-muted">
          ENGINEERING REASON
        </p>

        <p className="mt-2 text-sm leading-7 text-text-secondary">
          {reason}
        </p>
      </div>

    </article>
  )
}

export default TechnicalDecisionCard