import { projects } from '../../data/portfolio'
import { Badge } from '../../components/Badge/Badge'
import { SectionHeader } from '../../components/SectionHeader/SectionHeader'
import './Projects.css'

export function Projects() {
  return (
    <section id="projects" className="projects">
      <SectionHeader accentColor="#00AA55" tag="BOSS FIGHTS" title="Featured Projects" />

      <div className="projects__grid">
        {projects.map((proj) => (
          <div key={proj.id} className="projects__card">
            <img src={proj.image} alt={proj.title} className="projects__img" />
            <div className="projects__body">
              <Badge color={proj.tagColor} size="sm">{proj.tag}</Badge>
              <h3 className="projects__title">{proj.title}</h3>
              <p className="projects__desc">{proj.description}</p>
              <span className="projects__tech">{proj.tech.join('  \u00a0 ')}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}