export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer id="contact" className="site-footer">
      <div className="wrap footer-inner">
        <div>
          <h2 className="footer-title">Let's grow something together</h2>
          <p className="footer-sub">Open to new roles — reach out any time.</p>
          <div className="footer-actions">
            <a className="btn-primary" href="mailto:your.email@example.com">Say hello</a>
            <a className="btn-secondary" href="/resume.pdf" download>Download CV</a>
          </div>
        </div>
        <div className="footer-links">
          <a href="https://github.com/your-username" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/your-username" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:your.email@example.com">Email</a>
        </div>
      </div>
      <div className="wrap footer-bottom">
        <span>© {year} your name. Built with React.</span>
      </div>
    </footer>
  )
}
