
interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionHeadingProps) {
  const alignmentStyles = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
  }

  return (
    <div
      className={`flex max-w-3xl flex-col gap-3 ${alignmentStyles[align]}`}
    >
      {eyebrow && (
        <span className="font-mono text-xs font-medium uppercase tracking-widest text-accent">
          {eyebrow}
        </span>
      )}

      <h2 className="text-3xl font-bold tracking-tight text-text-primary md:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="max-w-2xl text-base leading-relaxed text-text-secondary">
          {description}
        </p>
      )}
    </div>
  )
}

export default SectionHeading
