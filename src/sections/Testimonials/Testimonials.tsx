import { testimonials } from '../../data/portfolio'
import { SectionHeader } from '../../components/SectionHeader/SectionHeader'
import './Testimonials.css'

export function Testimonials() {
  return (
    <section className="testimonials">
      <SectionHeader
        accentColor="#0066FF"
        tag="PLAYER REVIEWS"
        title="Trusted by Teams That Ship"
        light
      />

      <div className="testimonials__grid">
        {testimonials.map((t) => (
          <div key={t.id} className="testimonials__card">
            <span className="testimonials__stars" style={{ color: t.starsColor }}>
              ★ ★ ★ ★ ★
            </span>
            <p className="testimonials__quote">{t.quote}</p>
            <span className="testimonials__author" style={{ color: t.authorColor }}>
              {t.author}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}