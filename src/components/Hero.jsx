export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="wrap hero-inner">
        <div className="hero-copy">
          <p className="eyebrow">Software developer</p>
          <h1 className="hero-title">
            I build things the way a forest builds itself —<br />
            <span className="hero-title-accent">one root, one branch at a time.</span>
          </h1>
          <p className="hero-sub">
            A collection of projects I've planted, tended, and grown. Some are mature,
            some are still sprouting — scroll down to walk through the grove.
          </p>
          <div className="hero-actions">
            <a href="#grove" className="btn-primary">See my work</a>
            <a href="/resume.pdf" download className="btn-secondary">Download CV</a>
          </div>
        </div>

        <svg
          className="hero-branch"
          viewBox="0 0 360 420"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M180 410 C170 340 210 300 190 240 C175 195 205 160 195 100 C190 70 200 40 185 10"
            stroke="var(--moss)"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path d="M190 240 C230 225 250 190 285 185" stroke="var(--moss)" strokeWidth="4" strokeLinecap="round" />
          <path d="M195 150 C155 140 135 105 100 100" stroke="var(--moss)" strokeWidth="4" strokeLinecap="round" />
          <path d="M188 70 C215 60 225 35 255 28" stroke="var(--moss)" strokeWidth="3.5" strokeLinecap="round" />

          {/* leaves */}
          <ellipse cx="285" cy="182" rx="22" ry="13" fill="var(--amber)" transform="rotate(-18 285 182)" />
          <ellipse cx="100" cy="97" rx="24" ry="14" fill="var(--lichen)" transform="rotate(22 100 97)" />
          <ellipse cx="255" cy="25" rx="16" ry="10" fill="var(--amber-soft)" transform="rotate(-25 255 25)" />
          <ellipse cx="190" cy="238" rx="18" ry="11" fill="var(--lichen)" transform="rotate(10 190 238)" />
          <ellipse cx="184" cy="8" rx="14" ry="9" fill="var(--amber)" transform="rotate(-10 184 8)" />
        </svg>
      </div>
    </section>
  )
}
