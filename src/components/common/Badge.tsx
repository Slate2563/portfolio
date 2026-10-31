
import type { HTMLAttributes } from 'react'

type BadgeVariant = 'default' | 'accent' | 'success' | 'warning'

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant
}

function Badge({
  variant = 'default',
  className = '',
  children,
  ...props
}: BadgeProps) {
  const baseStyles =
    'inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium'

  const variantStyles: Record<BadgeVariant, string> = {
    default:
      'border-border bg-surface-elevated text-text-secondary',
    accent:
      'border-accent/30 bg-accent/10 text-accent',
    success:
      'border-success/30 bg-success/10 text-success',
    warning:
      'border-warning/30 bg-warning/10 text-warning',
  }

  return (
    <span
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  )
}

export default Badge
