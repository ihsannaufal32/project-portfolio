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
          <div class="bg-white p-4 rounded-lg shadow-md">
            <p class="text-gray-700">Komentar 1: Ini adalah contoh komentar pertama.</p>
          </div>
        </div>
      </div>
  
    </div>
      
    </>
  )
}


// Data komentar (contoh)
const comments = [
  { id: 1, author: 'John Doe', content: 'Komentar pertama', date: '2023-11-01' },
  { id: 2, author: 'Jane Smith', content: 'Komentar kedua', date: '2023-11-02' },
  // ... dan seterusnya
];

// Komponen komentar
function Comment({ comment }) {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <p className="font-bold">{comment.author}</p>
      <p className="text-gray-700">{comment.content}</p>
      <p className="text-xs text-gray-500">{comment.date}</p>
    </div>
  );
}

// Komponen daftar komentar
function CommentList({ comments }) {
  return (
    <div className="mt-4">
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
}
export default App
