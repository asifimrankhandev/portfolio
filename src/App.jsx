import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Home } from './pages/Home';
import { Resume } from './pages/Resume';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { CustomCursor } from './components/CustomCursor';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <ThemeProvider>
      <CustomCursor />
      <Router>
        <ScrollToTop />
        <Routes>
          <Route 
            path="/" 
            element={<Home />} 
          />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
