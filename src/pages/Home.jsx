import { Link } from 'react-router-dom'
import Hero from '../components/Hero.jsx'
import About from '../components/About.jsx'
import { useProjects } from '../context/ProjectsContext.jsx'

export default function Home() {
  const { allProjects } = useProjects()
  const preview = allProjects.slice(0, 3)

  return (
    <>
      <Hero />
      <About />

      <section className="grove-teaser">
        <div className="wrap">
          <p className="eyebrow">Projects</p>
          <h2 className="grove-title">A peek at the grove</h2>
          <p className="grove-sub">
            {allProjects.length} project{allProjects.length !== 1 ? 's' : ''} planted so far.
          </p>

          <div className="teaser-grid">
            {preview.map((project) => (
              <Link key={project.id} to={`/projects/${project.id}`} className="teaser-card">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <span className="teaser-arrow">View project →</span>
              </Link>
            ))}
          </div>

          <Link to="/projects" className="btn-primary see-all-btn">
            See all projects
          </Link>
        </div>
      </section>
    </>
  )
}
