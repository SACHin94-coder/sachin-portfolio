import { Link, useParams } from 'react-router-dom'
import { useProjects } from '../context/ProjectsContext.jsx'
import ImageSlider from '../components/ImageSlider.jsx'
import TechBadge from '../components/TechBadge.jsx'

export default function ProjectDetail() {
  const { id } = useParams()
  const { getProjectById } = useProjects()
  const project = getProjectById(id)

  if (!project) {
    return (
      <section className="detail-page">
        <div className="wrap">
          <p className="eyebrow">Not found</p>
          <h1 className="grove-title">This one hasn't grown yet</h1>
          <p className="grove-sub">There's no project with that address in the grove.</p>
          <Link to="/projects" className="btn-primary">Back to all projects</Link>
        </div>
      </section>
    )
  }

  return (
    <section className="detail-page">
      <div className="wrap">
        <Link to="/projects" className="back-link">← Back to all projects</Link>

        <div className="detail-grid">
          <ImageSlider images={project.images} alt={project.name} />

          <div>
            <div className="detail-head">
              <p className="eyebrow">
                {project.category}
                {project.buildYear ? ` · ${project.buildYear}` : ''}
                {project.status ? ` · ${project.status}` : ''}
              </p>
              <h1 className="detail-title">{project.name}</h1>
              <ul className="tech-badge-list">
                {project.tools?.map((tool) => (
                  <li key={tool}><TechBadge name={tool} /></li>
                ))}
              </ul>
            </div>

            <p className="detail-body">{project.description}</p>

            <div className="detail-links">
              {project.hasGitHub && project.github && (
                <a href={project.github} target="_blank" rel="noreferrer" className="btn-primary">
                  View on GitHub ↗
                </a>
              )}
              {project.hasLiveLink && project.liveLink && (
                <a href={project.liveLink} target="_blank" rel="noreferrer" className="btn-secondary">
                  Open live demo ↗
                </a>
              )}
              {!project.hasGitHub && !project.hasLiveLink && (
                <p className="detail-links-empty">
                  Code and demo links coming soon — add them under "github" and
                  "liveLink" in projects.json when ready.
                </p>
              )}
            </div>
          </div>
        </div>

        {project.features?.length > 0 && (
          <div className="detail-section">
            <h2 className="detail-section-title">Features</h2>
            <ul className="chip-list">
              {project.features.map((f) => <li key={f}>{f}</li>)}
            </ul>
          </div>
        )}

        {project.futureScope?.length > 0 && (
          <div className="detail-section">
            <h2 className="detail-section-title">Where it's still growing</h2>
            <ul className="chip-list chip-list-amber">
              {project.futureScope.map((f) => <li key={f}>{f}</li>)}
            </ul>
          </div>
        )}

        {project.changeHistory?.length > 0 && (
          <div className="detail-section">
            <h2 className="detail-section-title">Growth log</h2>
            <ul className="change-history">
              {project.changeHistory.map((entry, i) => (
                <li key={i}>
                  <span className="change-date">{entry.date}</span>
                  <span className="change-commit">{entry.commit}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  )
}
