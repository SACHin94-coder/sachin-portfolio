import skillGroups from '../data/skills.json'

const RADII = ['organic-1', 'organic-2', 'organic-3']

export default function Skills() {
  return (
    <section className="skills-page">
      <div className="wrap">
        <p className="eyebrow">Skills</p>
        <h1 className="grove-title">What I've Grown</h1>
        <p className="grove-sub">
          Languages, frameworks, and tools I've picked up and put to use.
        </p>

        <div className="skills-grid">
          {skillGroups.map((group, i) => (
            <div key={group.category} className={`skill-card radius-${RADII[i % RADII.length]}`}>
              <h3 className="skill-category">{group.category}</h3>
              <ul className="skill-pills">
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
