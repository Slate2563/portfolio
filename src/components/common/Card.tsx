
import type { HTMLAttributes } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  padding?: 'small' | 'medium' | 'large'
  hoverable?: boolean
}

function Card({
  padding = 'medium',
  hoverable = false,
  className = '',
  children,
  ...props
}: CardProps) {
  const baseStyles =
    'rounded-large border border-border bg-surface transition-all duration-200'

  const paddingStyles = {
    small: 'p-4',
    medium: 'p-6',
    large: 'p-8',
  }

  const hoverStyles = hoverable
    ? 'hover:-translate-y-1 hover:border-accent hover:shadow-soft'
    : ''

  return (
    <div
      className={`${baseStyles} ${paddingStyles[padding]} ${hoverStyles} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

export default Card
