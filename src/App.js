import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Dashboard, Login, Error } from './pages';



function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
