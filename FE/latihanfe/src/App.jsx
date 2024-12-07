import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Landingpage/Home'
import Ceck from './Pages/cek/cek'
import Develop from './Pages/Dev/Development'
import Notfound from './Pages/Notfound'
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Develop />}/>
        <Route path="/dev" element={<Home />}/>
        <Route path="/cek" element={<Ceck />}/>
        <Route path="*" element={<Notfound />}/>
      </Routes>
    </Router>
  )
}

export default App