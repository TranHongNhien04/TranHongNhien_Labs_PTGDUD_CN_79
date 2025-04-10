import { useState, lazy, Suspense } from 'react';
import './App.css';
import Menu from './components/Menu';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Dashboard = lazy(() => import('./components/Dashboard'));
const Projects = lazy(() => import('./components/Projects'));
const Teams = lazy(() => import('./components/Teams'));
const Analytics = lazy(() => import('./components/Analytics'));
const Messages = lazy(() => import('./components/Messages'));
const Integrations = lazy(() => import('./components/Integrations'));

function NotFound() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <div className="grid grid-cols-5 gap-4 p-4 h-screen">
          <Menu className="col-span-1" />
          <div className="col-span-4">
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/teams" element={<Teams />} />
                <Route path="/analytics" element={<Analytics />} />
                <Route path="/messages" element={<Messages />} />
                <Route path="/integrations" element={<Integrations />} />
                <Route path="*" element={<NotFound />} /> {/* Route 404 */}
              </Routes>
            </Suspense>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;