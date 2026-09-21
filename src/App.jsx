function App() {
  return (
    <div className="app">
      <div className="card">
        <h1>Ostad Assignment 5</h1>

        <p className="subtitle">
          GitHub Self-Hosted Runner
        </p>

        <div className="status">
          <span className="dot"></span>
          CI Pipeline Ready
        </div>

        <div className="info">
          <div>
            <span>Runner</span>
            <strong>ostad-runner</strong>
          </div>

          <div>
            <span>Build</span>
            <strong>Vite + React</strong>
          </div>

          <div>
            <span>Pipeline</span>
            <strong>GitHub Actions</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;