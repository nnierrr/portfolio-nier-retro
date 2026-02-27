import './Header.css'

export function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <span className="header__bracket">{'{ '}</span>
        <span className="header__name">nieric.dev</span>
        <span className="header__bracket">{' }'}</span>
      </div>

      <nav className="header__nav">
        <a href="#experience">EXPERIENCE</a>
        <a href="#skills">SKILLS</a>
        <a href="#projects">PROJECTS</a>
        <a href="#contact">CONTACT</a>
      </nav>

      <button className="header__hire-btn">HIRE ME</button>
    </header>
  )
}