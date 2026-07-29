import { Link } from 'react-router-dom'
import { useProjects } from '../context/ProjectsContext.jsx'
import AddProjectModal from '../components/AddProjectModal.jsx'

const RADII = ['organic-1', 'organic-2', 'organic-3']

export default function ProjectsList() {
  const { allProjects, plantedIds, removeProject, addProject, modalOpen, setModalOpen } =
    useProjects()

  return (
    <section className="projects-page">
      <div className="wrap">
        <p className="eyebrow">Projects</p>
        <h1 className="grove-title">The Grove</h1>
        <p className="grove-sub">
          Every box is something I've grown from an idea into working code.
          Open one to see how it came together, what it's built with, and
          where to try it yourself.
        </p>

        <div className="box-grid">
          {allProjects.map((project, i) => (
            <div key={project.id} className={`project-box radius-${RADII[i % RADII.length]}`}>
              <Link to={`/projects/${project.id}`} className="project-box-link">
                <div className="project-box-top">
                  <h3>{project.title}</h3>
                  {project.status === 'growing' && (
                    <span className="status-pill">still growing</span>
                  )}
                </div>
                <p>{project.description}</p>
                <ul className="project-tags">
                  {project.tags?.slice(0, 3).map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                <span className="teaser-arrow">Open project →</span>
              </Link>

              {plantedIds.includes(project.id) && (
                <button
                  className="project-remove"
                  onClick={() => removeProject(project.id)}
                  aria-label={`Remove ${project.title}`}
                >
                  Uproot
                </button>
              )}
            </div>
          ))}

          <button className="add-project-box" onClick={() => setModalOpen(true)}>
            <span className="add-project-icon">+</span>
            <span>
              <strong>Plant a new project</strong>
              <br />
              Add one of your own to the grove
            </span>
          </button>
        </div>
      </div>

      {modalOpen && (
        <AddProjectModal onClose={() => setModalOpen(false)} onSubmit={addProject} />
      )}
    </section>
  )
}
