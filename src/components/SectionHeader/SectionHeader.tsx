import './SectionHeader.css'

interface SectionHeaderProps {
  accentColor: string
  tag: string
  title: string
  light?: boolean
}

export function SectionHeader({ accentColor, tag, title, light = false }: SectionHeaderProps) {
  return (
    <div className="section-header">
      <div className="section-header__label-row">
        <div className="section-header__accent" style={{ background: accentColor }} />
        <span className="section-header__tag">{tag}</span>
      </div>
      <h2 className={`section-header__title${light ? ' section-header__title--light' : ''}`}>
        {title}
      </h2>
    </div>
  )
}