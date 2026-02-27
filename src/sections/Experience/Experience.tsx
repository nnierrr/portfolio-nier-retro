import { experiences } from '../../data/portfolio'
import { Badge } from '../../components/Badge/Badge'
import { SectionHeader } from '../../components/SectionHeader/SectionHeader'
import './Experience.css'

export function Experience() {
  return (
    <section id="experience" className="experience">
      <SectionHeader accentColor="#0066FF" tag="QUEST LOG" title="Battle-Tested Experience" />

      <div className="experience__grid">
        {experiences.map((exp) => (
          <div key={exp.id} className="experience__card">
            <div className="experience__left">
              <span className="experience__date" style={{ color: exp.badgeColor }}>
                {exp.date}
              </span>
              <Badge color={exp.badgeColor} size="sm">{exp.badge}</Badge>
            </div>
            <div className="experience__right">
              <h3 className="experience__title">{exp.title}</h3>
              <span className="experience__company" style={{ color: exp.companyColor }}>
                {exp.company}
              </span>
              <p className="experience__desc">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}