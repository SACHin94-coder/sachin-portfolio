export default function ProjectThumb({ project, className = '' }) {
  const images = project.images || []

  if (images.length > 0) {
    return (
      <div className={`project-thumb ${className}`}>
        <img src={images[0]} alt={project.name} loading="lazy" />
        {images.length > 1 && (
          <span className="project-thumb-count">1/{images.length}</span>
        )}
      </div>
    )
  }

  // No images yet — show a small placeholder so the layout still looks
  // intentional. Add paths to "images" in projects.json once you have
  // screenshots (put the files in public/projects/).
  return (
    <div className={`project-thumb project-thumb-empty ${className}`} aria-hidden="true">
      <svg viewBox="0 0 64 64" width="34" height="34">
        <path
          d="M32 54 C32 40 32 30 32 20"
          stroke="var(--moss)"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
        <ellipse cx="32" cy="16" rx="12" ry="8" fill="var(--amber)" transform="rotate(-12 32 16)" />
        <ellipse cx="20" cy="26" rx="9" ry="6" fill="var(--lichen)" transform="rotate(20 20 26)" />
      </svg>
    </div>
  )
}
