import './Footer.css'

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <span className="footer__bracket">{'{ '}</span>
        <span className="footer__name">nieric.dev</span>
        <span className="footer__bracket">{' }'}</span>
      </div>

      <span className="footer__tagline">Adapt. Improvise. Overcome.</span>

      <div className="footer__links">
        <a href="#">GITHUB</a>
        <a href="#">LINKEDIN</a>
        <a href="#">EMAIL</a>
      </div>

      <span className="footer__copyright">© 2026 Nieric Javinal</span>
    </footer>
  )
}