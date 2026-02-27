import './Badge.css'

interface BadgeProps {
  children: React.ReactNode
  color: string
  size?: 'sm' | 'md'
}

export function Badge({ children, color, size = 'md' }: BadgeProps) {
  return (
    <span
      className={`badge badge--${size}`}
      style={{ background: color }}
    >
      {children}
    </span>
  )
}