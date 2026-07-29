import { Link, useParams } from 'react-router-dom'
import { useProjects } from '../context/ProjectsContext.jsx'

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

        <div className="detail-head">
          <p className="eyebrow">{project.year || ''} {project.status === 'growing' ? '· Still growing' : ''}</p>
          <h1 className="detail-title">{project.title}</h1>
          <ul className="project-tags detail-tags">
            {project.tags?.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>

        <p className="detail-body">
          {project.longDescription || project.description}
        </p>

        <div className="detail-links">
          {project.codeUrl && (
            <a href={project.codeUrl} target="_blank" rel="noreferrer" className="btn-primary">
              View on GitHub ↗
            </a>
          )}
          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" rel="noreferrer" className="btn-secondary">
              Open live demo ↗
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
