import { getTechIcon } from '../data/techIcons.js'

export default function TechBadge({ name }) {
  const { icon: Icon, color } = getTechIcon(name)
  return (
    <span className="tech-badge">
      <Icon style={{ color }} className="tech-badge-icon" />
      {name}
    </span>
  )
}
