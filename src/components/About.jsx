export default function About() {
  return (
    <section id="about" className="about">
      <div className="wrap about-inner">
        <div className="about-text">
          <p className="eyebrow">About</p>
          <h2 className="about-title">A short bit of soil chemistry</h2>
          <p>
            I'm a developer who likes projects that start small and are allowed to keep
            growing. Below is the grove — every project is a card you can open, read
            through, check the code on GitHub, or try the live version.
          </p>
          <p>
            Replace this paragraph with your own background: what you work with day to
            day, what you're learning right now, and what kind of role you're looking for.
          </p>
        </div>
        <ul className="about-stats">
          <li><span className="stat-num">1+</span><span className="stat-label">years writing code</span></li>
          <li><span className="stat-num">10+</span><span className="stat-label">shipped projects</span></li>
          <li><span className="stat-num">1</span><span className="stat-label">grove, always growing</span></li>
        </ul>
      </div>
    </section>
  )
}
