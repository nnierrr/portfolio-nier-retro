import { Button } from '../../components/Button/Button'
import './Cta.css'

export function Cta() {
  return (
    <section id="contact" className="cta">
      <h2 className="cta__title">Ready to Start a New Game?</h2>
      <p className="cta__desc">
        Let's build something users love. From concept to deployment, I'll turn your vision
        into production-ready code that scales.
      </p>
      <div className="cta__btns">
        <Button variant="cta-primary">HIRE NIERIC</Button>
        <Button variant="cta-secondary">VIEW RESUME</Button>
      </div>
      <span className="cta__email">nieric.work@gmail.com</span>
    </section>
  )
}