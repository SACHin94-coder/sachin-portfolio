import { useState } from 'react'

export default function AddProjectModal({ onClose, onSubmit }) {
  const [form, setForm] = useState({
    title: '',
    description: '',
    tags: '',
    codeUrl: '',
    demoUrl: '',
    status: 'growing',
  })
  const [error, setError] = useState('')

  const update = (field) => (e) => setForm({ ...form, [field]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.title.trim() || !form.description.trim()) {
      setError('A project needs at least a title and a short description.')
      return
    }
    onSubmit({
      title: form.title.trim(),
      description: form.description.trim(),
      tags: form.tags.split(',').map((t) => t.trim()).filter(Boolean),
      codeUrl: form.codeUrl.trim(),
      demoUrl: form.demoUrl.trim(),
      status: form.status,
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
            Title
            <input value={form.title} onChange={update('title')} placeholder="e.g. Riverbed" />
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

          <label>
            Tags <span className="label-hint">(comma separated)</span>
            <input value={form.tags} onChange={update('tags')} placeholder="React, Express, PostgreSQL" />
          </label>

          <div className="modal-form-row">
            <label>
              Code link
              <input value={form.codeUrl} onChange={update('codeUrl')} placeholder="https://github.com/..." />
            </label>
            <label>
              Live demo link
              <input value={form.demoUrl} onChange={update('demoUrl')} placeholder="https://..." />
            </label>
          </div>

          <label>
            Growth stage
            <select value={form.status} onChange={update('status')}>
              <option value="growing">Still growing</option>
              <option value="mature">Mature</option>
            </select>
          </label>

          {error && <p className="modal-error">{error}</p>}

          <button type="submit" className="btn-primary modal-submit">Add to grove</button>
        </form>
      </div>
    </div>
  )
}
