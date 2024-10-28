import { useEffect, useState } from 'react'
import reactLogo from './assets/react.png'
import viteLogo from './assets/vite.png'
import nodelogo from './assets/Node.js.png'
import foto from './assets/pasfoto.jpg'
import './App.css'

function App() {
  const [data, setData] = useState('');
  const [count, setCount] = useState(0)

  useEffect(() => {
    // Ganti URL dengan alamat server Express kamu
    fetch('http://192.168.1.26:8080/')
      .then(response => response.json())
      .then(data => setData(data.data[0].username))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
      <header>
        <div class="h-20" id="responsivenavbar">
          <nav>
            <a href="#home" className="active" >
              <img src={viteLogo} class="h-20" id="logonav" alt="" />
            </a>
              <a href="#pendidikan" class="mt-7" id="textnav">Profil</a>
              <a href="#olahraga" class="mt-7" id="textnav">Project</a>
              <a href="#kesehatan" class="mt-7" id="textnav">Sertifikat</a>
              <a href="#about" class="mt-7" id="textnav">Kontak</a>
            <div class="float-end mr-7 mt-5">
              <input type="text" name="search" class="rounded-md py-1 pl-4" placeholder="Search.." id="searchnavbar"/>
              <button class="ml-7"id="tombolsearchnav">Cari</button>
              <a href="javascript:void(0);" className="icon" onclick="myFunction()">
              <i className="fa fa-bars"></i>
              </a>
            </div>
          </nav>
        </div>
    </header>
      <h1 class="py-5 pl-5">Halo <span class="font-bold">{data}</span>, Selamat datang!</h1>
      <div class="flex place-content-center">
        <img src={foto} class="rounded-full h-40" alt="foto" />
      </div>
      <h1 class="text-center">Muhammad Ihsan Naufal Muniif</h1>
      <div class="flex flex-row items-center place-content-center	">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} class="h-52" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} class="h-40 px-10" alt="React logo" />
        </a>
        <a href="">
          <img src={nodelogo} class="h-40" alt="node logo" />
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
