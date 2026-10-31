
import type { ButtonHTMLAttributes } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'outline'
type ButtonSize = 'small' | 'medium' | 'large'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
}

function Button({
  variant = 'primary',
  size = 'medium',
  className = '',
  type = 'button',
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent disabled:pointer-events-none disabled:opacity-50'

  const variantStyles: Record<ButtonVariant, string> = {
    primary:
      'bg-accent text-accent-foreground hover:bg-accent-hover',
    secondary:
      'bg-surface-elevated text-text-primary hover:bg-border',
    outline:
      'border border-border bg-transparent text-text-primary hover:border-accent hover:text-accent',
  }

  const sizeStyles: Record<ButtonSize, string> = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-5 py-3 text-sm',
    large: 'px-7 py-4 text-base',
  }

  return (
    <button
      type={type}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
