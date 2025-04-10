import { useState } from 'react';
import './App.css';
import Menu from './components/Menu';
import Dashboard from './components/Dashboard';
import Projects from './components/Projects';
import Teams from './components/Teams';
import Analytics from './components/Analytics';
import Messages from './components/Messages';
import Integrations from './components/Integrations';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <div className="grid grid-cols-5 gap-4 p-4 h-screen">
          <Menu className="col-span-1" />
          <div className="col-span-4">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/teams" element={<Teams />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/integrations" element={<Integrations />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;