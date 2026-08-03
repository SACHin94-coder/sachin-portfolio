export default function GrowingTree({ categories }) {
  return (
    <div className="growing-tree" aria-hidden="true">
      <ul className="tree-branches">
        {categories.map((cat, i) => (
          <li key={cat} className={`tree-branch ${i % 2 === 0 ? 'branch-left' : 'branch-right'}`}>
            <span className="branch-chip">{cat}</span>
          </li>
        ))}
      </ul>
      <div className="tree-root">
        <svg viewBox="0 0 140 46" width="140" height="46">
          <path d="M70 0 L70 10" stroke="var(--bark)" strokeWidth="5" strokeLinecap="round" />
          <path d="M70 10 C55 20 40 22 14 44" stroke="var(--bark)" strokeWidth="4" fill="none" strokeLinecap="round" />
          <path d="M70 10 C85 20 100 22 126 44" stroke="var(--bark)" strokeWidth="4" fill="none" strokeLinecap="round" />
          <path d="M70 10 C70 22 70 30 70 44" stroke="var(--bark)" strokeWidth="4" fill="none" strokeLinecap="round" />
        </svg>
        <span className="tree-root-label">rooted in fundamentals</span>
      </div>
    </div>
  )
}
