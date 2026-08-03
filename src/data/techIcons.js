import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiReactrouter,
  SiTailwindcss,
  SiMongodb,
  SiJson,
  SiNodedotjs,
  SiExpress,
  SiJsonwebtokens,
  SiRedis,
  SiDocker,
  SiLinux,
  SiGit,
  SiGithub,
  SiGooglefonts,
} from 'react-icons/si'
import { FaJava, FaCode } from 'react-icons/fa6'

// Map a tool/tech name (as written in projects.json) to an icon + brand color.
// Anything not listed here falls back to a generic code icon, so new tools
// you add to projects.json will never break — they'll just show a plain icon
// until you add a proper entry below.
const TECH_ICONS = {
  HTML: { icon: SiHtml5, color: '#E44D26' },
  CSS: { icon: SiCss, color: '#2965F1' },
  JavaScript: { icon: SiJavascript, color: '#F0DB4F' },
  React: { icon: SiReact, color: '#61DAFB' },
  'React Router': { icon: SiReactrouter, color: '#CA4245' },
  'Tailwind CSS': { icon: SiTailwindcss, color: '#38BDF8' },
  MongoDB: { icon: SiMongodb, color: '#47A248' },
  JSON: { icon: SiJson, color: '#B2B2B2' },
  'Node.js': { icon: SiNodedotjs, color: '#5FA04E' },
  Express: { icon: SiExpress, color: '#E8E8E8' },
  JWT: { icon: SiJsonwebtokens, color: '#D63AFF' },
  Redis: { icon: SiRedis, color: '#FF4438' },
  Docker: { icon: SiDocker, color: '#2496ED' },
  Linux: { icon: SiLinux, color: '#FCC624' },
  Git: { icon: SiGit, color: '#F05032' },
  GitHub: { icon: SiGithub, color: '#E8E8E8' },
  'Google Fonts': { icon: SiGooglefonts, color: '#4285F4' },
  Java: { icon: FaJava, color: '#E76F00' },
}

export function getTechIcon(name) {
  return TECH_ICONS[name] || { icon: FaCode, color: '#A9C0A0' }
}
