import { Link } from 'react-router-dom'
import { useProjects } from '../context/ProjectsContext.jsx'
import AddProjectModal from '../components/AddProjectModal.jsx'
import ProjectThumb from '../components/ProjectThumb.jsx'
import TechBadge from '../components/TechBadge.jsx'
import GrowingTree from '../components/GrowingTree.jsx'

export default function ProjectsList() {
  const { allProjects, plantedIds, removeProject, addProject, modalOpen, setModalOpen } =
    useProjects()

  const categories = [...new Set(allProjects.map((p) => p.category).filter(Boolean))]

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

        <GrowingTree categories={categories} />

        <div className="box-grid">
          {allProjects.map((project, i) => (
            <div key={project.id} className="project-box">
              <Link to={`/projects/${project.id}`} className="project-box-link">
                <ProjectThumb project={project} />
                <div className="project-box-top">
                  <h3>{project.name}</h3>
                  {project.status && <span className="status-pill">{project.status}</span>}
                </div>
                <p>{project.description}</p>
                <ul className="tech-badge-list">
                  {project.tools?.slice(0, 4).map((tool) => (
                    <li key={tool}><TechBadge name={tool} /></li>
                  ))}
                </ul>
                <span className="teaser-arrow">Open project →</span>
              </Link>

              {plantedIds.includes(project.id) && (
                <button
                  className="project-remove"
                  onClick={() => removeProject(project.id)}
                  aria-label={`Remove ${project.name}`}
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
