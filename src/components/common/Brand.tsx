
interface BrandProps {
  onClick?: () => void
  className?: string
}

function Brand({ onClick, className = '' }: BrandProps) {
  return (
    <a
      href="#home"
      onClick={onClick}
      aria-label="Go to homepage"
      className={`inline-flex items-center font-display text-lg font-bold tracking-tight ${className}`}
    >
      PORTFOLIO
      <span className="ml-0.5 text-accent">.</span>
    </a>
  )
}

export default Brand
