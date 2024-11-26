import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Landingpage/Home';
import Ceck from './Pages/cek/cek'
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/cek" element={<Ceck />}/>
      </Routes>
    </Router>
  )
}

export default App