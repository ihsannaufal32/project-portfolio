import { useEffect, useState } from 'react'
import reactLogo from './assets/react.png'
import viteLogo from './assets/vite.png'
import nodelogo from './assets/Node.js.png'
import './App.css'

function App() {
  const [data, setData] = useState('');
  const [count, setCount] = useState(0)

  useEffect(() => {
    // Ganti URL dengan alamat server Express kamu
    fetch('http://192.168.1.8:8080/data')
      .then(response => response.json())
      .then(data => setData(data.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
      <header>
        <nav>
            <div class="responsivenavbar" id="navbar">
                <a href="#home" class="active">
                  <img src={viteLogo} alt="" />
                  </a>
                <a href="#pendidikan" id="textnav">Profil</a>
                <a href="#olahraga" id="textnav">Project</a>
                <a href="#kesehatan" id="textnav">Sertifikat</a>
                <a href="#about" id="textnav">Kontak</a>
                <input type="text" name="search" placeholder="Search.." id="searchnavbar"/>
                <button id="tombolsearchnav">Cari</button>
                <a href="javascript:void(0);" class="icon" onclick="myFunction()">
                  <i class="fa fa-bars"></i>
                </a>
              </div>
        </nav>
    </header>
      <h1>Bismillah Portfolio</h1>
      <p>{data}</p>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logovite" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logoreact" alt="React logo" />
        </a>
        <a href="">
          <img src={nodelogo} className="logonode" alt="node logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
