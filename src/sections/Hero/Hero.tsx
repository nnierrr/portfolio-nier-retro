import { Badge } from '../../components/Badge/Badge'
import { Button } from '../../components/Button/Button'
import './Hero.css'

export function Hero() {
  return (
    <section className="hero">
      <div className="hero__left">
        <Badge color="#00AA55">PLAYER 1 READY</Badge>
        <h1 className="hero__title">NIERIC JAVINAL</h1>
        <p className="hero__subtitle">System Analyst &amp; Full-Stack Engineer</p>
        <p className="hero__desc">
          5+ years turning complex challenges into clean, scalable code. From Flutter mobile apps
          to enterprise cloud systems — I ship products that perform, scale, and delight users.
        </p>
        <div className="hero__btns">
          <Button variant="primary">START PROJECT</Button>
          <Button variant="secondary">VIEW GITHUB</Button>
        </div>
      </div>

      <div
        className="hero__avatar"
        style={{ backgroundImage: `url(${import.meta.env.BASE_URL}generated-1772196248973.png)` }}
      >
        <span className="hero__avatar-label">LVL 99 ENGINEER</span>
      </div>
    </section>
  )
}