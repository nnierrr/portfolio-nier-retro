import { skillCategories } from '../../data/portfolio'
import { SectionHeader } from '../../components/SectionHeader/SectionHeader'
import './Skills.css'

export function Skills() {
  return (
    <section id="skills" className="skills">
      <SectionHeader accentColor="#FF3300" tag="POWER-UPS" title="Technology Arsenal" />

      <div className="skills__grid">
        {skillCategories.map((cat) => (
          <div key={cat.id} className="skills__category">
            <div className="skills__category-header">
              <div className="skills__dot" style={{ background: cat.dotColor }} />
              <span className="skills__category-title">{cat.title}</span>
            </div>
            <div className="skills__items">
              {cat.skills.map((skill) => (
                <div
                  key={skill.label}
                  className="skills__tag"
                  style={skill.highlighted ? { color: cat.highlightColor } : undefined}
                >
                  {skill.label}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}