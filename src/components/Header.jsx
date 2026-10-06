import { Link, NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <Link to="/" className="wordmark">
          Sachin Sahani<span className="wordmark-dot">.</span>
        </Link>
        <nav className="nav-links">
          <NavLink to="/" end className={({ isActive }) => (isActive ? 'nav-active' : '')}>
            Home
          </NavLink>
          <NavLink to="/projects" className={({ isActive }) => (isActive ? 'nav-active' : '')}>
            Projects
          </NavLink>
          <NavLink to="/skills" className={({ isActive }) => (isActive ? 'nav-active' : '')}>
            Skills
          </NavLink>
          <a href="/#contact">Contact</a>
        </nav>
        {/* Put your resume file at public/resume.pdf and this button will serve it */}
        <a className="btn-resume">
          Download CV
        </a>
      </div>
    </header>
  )
}
