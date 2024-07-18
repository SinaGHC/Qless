import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './components/Login';
import Admin from './components/Admin';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Login</Link>
        </nav>
        <button onClick={() => window.location.href = "/"}>Go to Login</button>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
