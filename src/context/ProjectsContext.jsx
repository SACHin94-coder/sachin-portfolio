import { createContext, useContext, useEffect, useState } from 'react'
import SEED_PROJECTS from '../data/projects.json'

const STORAGE_KEY = 'grove-planted-projects'
const ProjectsContext = createContext(null)

export function ProjectsProvider({ children }) {
  const [plantedProjects, setPlantedProjects] = useState([])
  const [modalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
      setPlantedProjects(stored)
    } catch {
      setPlantedProjects([])
    }
  }, [])

  const persist = (next) => {
    setPlantedProjects(next)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
  }

  const addProject = (project) => {
    const slug = project.name
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '')
    const id = `${slug || 'project'}-${Date.now()}`
    const next = [...plantedProjects, { ...project, id }]
    persist(next)
    setModalOpen(false)
    return id
  }

  const removeProject = (id) => {
    persist(plantedProjects.filter((p) => p.id !== id))
  }

  const allProjects = [...SEED_PROJECTS, ...plantedProjects]
  const plantedIds = plantedProjects.map((p) => p.id)

  const getProjectById = (id) => allProjects.find((p) => String(p.id) === String(id))

  return (
    <ProjectsContext.Provider
      value={{
        allProjects,
        plantedIds,
        addProject,
        removeProject,
        getProjectById,
        modalOpen,
        setModalOpen,
      }}
    >
      {children}
    </ProjectsContext.Provider>
  )
}

export function useProjects() {
  const ctx = useContext(ProjectsContext)
  if (!ctx) throw new Error('useProjects must be used inside ProjectsProvider')
  return ctx
}
