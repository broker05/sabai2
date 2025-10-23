import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Home from './pages/Home';
import GlobalPage from './pages/GlobalPage';
import TeamPage from './pages/TeamPage';
import ProjectionsPage from './pages/ProjectionsPage';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="app">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/global" element={<GlobalPage />} />
              <Route path="/team" element={<TeamPage />} />
              <Route path="/projections" element={<ProjectionsPage />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
