interface TechnicalChallengeCardProps {
  challenge: string
  solution: string
  index: number
}

function TechnicalChallengeCard({
  challenge,
  solution,
  index,
}: TechnicalChallengeCardProps) {
  return (
    <article className="rounded-large border border-border bg-surface p-6 transition-standard hover-lift">

      <span className="font-mono text-xs text-accent">
        CHALLENGE {String(index + 1).padStart(2, '0')}
      </span>

      <h3 className="mt-4 font-display text-lg font-semibold">
        {challenge}
      </h3>

      <div className="mt-5 border-t border-border pt-4">
        <p className="font-mono text-xs text-text-muted">
          ENGINEERING APPROACH
        </p>

        <p className="mt-2 text-sm leading-7 text-text-secondary">
          {solution}
        </p>
      </div>

    </article>
  )
}

export default TechnicalChallengeCard