import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <Header />
        <main>
          <Home />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
