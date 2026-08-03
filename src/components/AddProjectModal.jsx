import { useState } from 'react'

export default function AddProjectModal({ onClose, onSubmit }) {
  const [form, setForm] = useState({
    name: '',
    description: '',
    category: '',
    buildYear: new Date().getFullYear().toString(),
    tools: '',
    github: '',
    liveLink: '',
    images: '',
    status: 'In Progress',
  })
  const [error, setError] = useState('')

  const update = (field) => (e) => setForm({ ...form, [field]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name.trim() || !form.description.trim()) {
      setError('A project needs at least a name and a short description.')
      return
    }
    onSubmit({
      name: form.name.trim(),
      description: form.description.trim(),
      category: form.category.trim(),
      buildYear: form.buildYear.trim(),
      tools: form.tools.split(',').map((t) => t.trim()).filter(Boolean),
      github: form.github.trim(),
      hasGitHub: Boolean(form.github.trim()),
      liveLink: form.liveLink.trim(),
      hasLiveLink: Boolean(form.liveLink.trim()),
      images: form.images.split(',').map((u) => u.trim()).filter(Boolean),
      status: form.status,
      features: [],
      futureScope: [],
      changeHistory: [],
    })
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
        <button className="modal-close" onClick={onClose} aria-label="Close">×</button>
        <p className="eyebrow">New project</p>
        <h3 className="modal-title">Plant something new</h3>

        <form onSubmit={handleSubmit} className="modal-form">
          <label>
            Name
            <input value={form.name} onChange={update('name')} placeholder="e.g. Riverbed" />
          </label>

          <label>
            Description
            <textarea
              value={form.description}
              onChange={update('description')}
              rows={3}
              placeholder="What does it do, and why did you build it?"
            />
          </label>

          <div className="modal-form-row">
            <label>
              Category
              <input value={form.category} onChange={update('category')} placeholder="e.g. Utility" />
            </label>
            <label>
              Build year
              <input value={form.buildYear} onChange={update('buildYear')} placeholder="2026" />
            </label>
          </div>

          <label>
            Tools/tech <span className="label-hint">(comma separated)</span>
            <input value={form.tools} onChange={update('tools')} placeholder="React, Express, MongoDB" />
          </label>

          <div className="modal-form-row">
            <label>
              GitHub link
              <input value={form.github} onChange={update('github')} placeholder="https://github.com/..." />
            </label>
            <label>
              Live demo link
              <input value={form.liveLink} onChange={update('liveLink')} placeholder="https://..." />
            </label>
          </div>

          <label>
            Photo URLs <span className="label-hint">(comma separated, 3-4 recommended, optional)</span>
            <input value={form.images} onChange={update('images')} placeholder="/projects/riverbed-1.png, /projects/riverbed-2.png" />
          </label>

          <label>
            Status
            <select value={form.status} onChange={update('status')}>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </label>

          {error && <p className="modal-error">{error}</p>}

          <button type="submit" className="btn-primary modal-submit">Add to grove</button>
        </form>
      </div>
    </div>
  )
}
