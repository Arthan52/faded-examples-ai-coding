import { useMemo, useState } from 'react';

type BadgeType = 'concept' | 'hint' | 'warning';

type Region = {
  id: string;
  label: string;
  lines: [number, number];
  status: 'visible' | 'faded' | 'locked';
  difficulty: 'basic' | 'intermediate' | 'advanced';
  description: string;
};

type Task = {
  title: string;
  chapter: string;
  objective: string;
  difficulty: string;
  fadeLevel: number;
  exercise: string;
  currentCode: string;
  expectedLogic: string;
  hints: string[];
  metrics: {
    completion: number;
    accuracy: number;
    streak: number;
  };
  regions: Region[];
};

const task: Task = {
  title: 'Build API route with middleware',
  chapter: 'Backend Patterns',
  objective: 'Menulis endpoint yang memvalidasi request dan mengirim response sesuai skema',
  difficulty: 'Intermediate',
  fadeLevel: 2,
  exercise: `
function createUserHandler(req, res) {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: 'Missing required field' });
  }

  const user = {
    id: crypto.randomUUID(),
    name,
    email,
  };

  return res.status(201).json({ user });
}`,
  expectedLogic: 'Validasi input, generate ID, simpan data, kembalikan response 201',
  hints: [
    'Mulai dari validasi missing field sebelum membuat objek user.',
    'Gunakan response status yang sesuai dengan operasi create.',
    'ID unik bisa dihasilkan dari crypto randomUUID.'
  ],
  metrics: {
    completion: 68,
    accuracy: 82,
    streak: 4
  },
  regions: [
    {
      id: 'imports',
      label: 'Imports & Setup',
      lines: [1, 4],
      status: 'faded',
      difficulty: 'basic',
      description: 'Dependencies boilerplate yang biasanya di-copy-paste.'
    },
    {
      id: 'validation',
      label: 'Validation Logic',
      lines: [5, 12],
      status: 'visible',
      difficulty: 'intermediate',
      description: 'Area yang harus dipahami untuk pencegahan error.'
    },
    {
      id: 'response',
      label: 'Response Pattern',
      lines: [13, 20],
      status: 'faded',
      difficulty: 'intermediate',
      description: 'Status code dan format response yang konsisten.'
    },
    {
      id: 'logic',
      label: 'Core Logic',
      lines: [21, 28],
      status: 'locked',
      difficulty: 'advanced',
      description: 'Bagian inti yang harus siswa isi secara eksplisit.'
    }
  ]
};

const badges: { label: string; type: BadgeType }[] = [
  { label: 'Validation', type: 'concept' },
  { label: 'Smart Hint', type: 'hint' },
  { label: 'Needs Review', type: 'warning' }
];

function App() {
  const [activeRegion, setActiveRegion] = useState(task.regions[1]);

  const completedConcepts = useMemo(
    () => [...task.regions.filter((region) => region.status !== 'locked').map((region) => region.label)],
    []
  );

  return (
    <div className="page-shell">
      <aside className="sidebar">
        <div className="brand">
          <span className="brand-mark">AI</span>
          <div>
            <strong>Faded Examples</strong>
            <small>AI Coding Learning</small>
          </div>
        </div>

        <nav className="nav-section">
          <span className="nav-label">Workspace</span>
          <button className="nav-item active">Learning Tasks</button>
          <button className="nav-item">Progress</button>
          <button className="nav-item">AI Feedback</button>
          <button className="nav-item">Challenges</button>
        </nav>

        <div className="mini-card">
          <span className="mini-title">Current Stage</span>
          <h3>Fade Level {task.fadeLevel}</h3>
          <p>Boilerplate dipangkas, core logic mulai muncul secara bertahap.</p>
        </div>
      </aside>

      <main className="main-panel">
        <header className="topbar">
          <div>
            <p className="eyebrow">{task.chapter}</p>
            <h1>{task.title}</h1>
          </div>
          <div className="header-actions">
            <button className="ghost-button">Save Draft</button>
            <button className="primary-button">Submit</button>
          </div>
        </header>

        <section className="summary-grid">
          <div className="summary-card highlight">
            <span>Objective</span>
            <strong>{task.objective}</strong>
          </div>
          <div className="summary-card">
            <span>Difficulty</span>
            <strong>{task.difficulty}</strong>
          </div>
          <div className="summary-card">
            <span>Completion</span>
            <strong>{task.metrics.completion}%</strong>
          </div>
        </section>

        <section className="workspace-grid">
          <div className="editor-panel">
            <div className="panel-header">
              <span>Code Workspace</span>
              <div className="badges">
                {badges.map((badge) => (
                  <span key={badge.label} className={`badge ${badge.type}`}>
                    {badge.label}
                  </span>
                ))}
              </div>
            </div>

            <pre className="editor-box">{task.currentCode}</pre>
          </div>

          <div className="side-panel">
            <div className="panel-header compact">
              <span>Learning Map</span>
            </div>

            <div className="region-list">
              {task.regions.map((region) => (
                <button
                  type="button"
                  key={region.id}
                  className={`region-item ${activeRegion.id === region.id ? 'selected' : ''}`}
                  onClick={() => setActiveRegion(region)}
                >
                  <div className="region-top">
                    <span>{region.label}</span>
                    <span className={`pill ${region.status}`}>{region.status}</span>
                  </div>
                  <small>{region.lines[0]}-{region.lines[1]} lines</small>
                </button>
              ))}
            </div>

            <div className="focus-box">
              <h4>{activeRegion.label}</h4>
              <p>{activeRegion.description}</p>
              <strong>Difficulty: {activeRegion.difficulty}</strong>
            </div>
          </div>
        </section>

        <section className="bottom-grid">
          <div className="feedback-panel">
            <h3>AI Feedback</h3>
            <ul>
              <li>Validasi input harus dilakukan sebelum pembuatan objek user.</li>
              <li>Gunakan response 201 saat resource berhasil dibuat.</li>
              <li>Struktur code sudah cukup dekat dengan pola best practice.</li>
            </ul>
          </div>

          <div className="hint-panel">
            <h3>Adaptive Hints</h3>
            {task.hints.map((hint) => (
              <div key={hint} className="hint-item">
                <span className="dot" />
                <p>{hint}</p>
              </div>
            ))}
          </div>

          <div className="stats-panel">
            <h3>Progress</h3>
            <div className="metric-group">
              <div>
                <span>Accuracy</span>
                <strong>{task.metrics.accuracy}%</strong>
              </div>
              <div>
                <span>Streak</span>
                <strong>{task.metrics.streak}</strong>
              </div>
            </div>
            <div className="progress-bar">
              <span style={{ width: `${task.metrics.completion}%` }} />
            </div>
            <p className="completed-text">Completed concepts:</p>
            <div className="concept-list">
              {completedConcepts.map((concept) => (
                <span key={concept} className="concept-tag">
                  {concept}
                </span>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
