import { useEffect, useState } from 'react'
import reactLogo from './assets/React.png'
import viteLogo from './assets/Vite.png'
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

  const datakomen = [
    {
      id: 1,
      komen: "komentar pertama"
    },
    {
      id: 2,
      komen: "Komentar kedua"
    },
    {
      id: 3,
      komen: "komentar ketiga"
    },
    {
      id: 4,
      komen: "komentar cek "
    }
  ]

  return (
    <>
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
    <div class="container mx-auto">
      <h1>Komentar & Feedback</h1>
      <form class="flex flex-col mt-5">
          <textarea class="border border-gray-300 p-2 rounded-md mb-2" placeholder="Tulis komentar Anda"></textarea>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Kirim</button>
      </form>
      <div class="flex flex-col">
        <div class="mt-4">
          {datakomen.slice(0, 4).map((datakomen) => {
            return (
              <div key={datakomen.id} class="bg-white p-4 rounded-lg shadow-md my-2">
                <p class="text-gray-700">{datakomen.id}</p>
                <p class="text-gray-700">Komentar: {datakomen.komen}.</p>
              </div>
            )
          })}
          
        </div>
      </div>
    </div>
      
    </>
  )
}

export default App
