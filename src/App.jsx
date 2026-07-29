import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import ProjectsList from './pages/ProjectsList.jsx'
import ProjectDetail from './pages/ProjectDetail.jsx'
import Skills from './pages/Skills.jsx'
import { ProjectsProvider } from './context/ProjectsContext.jsx'
import './App.css'

export default function App() {
  return (
    <ProjectsProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<ProjectsList />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/skills" element={<Skills />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ProjectsProvider>
  )
}
