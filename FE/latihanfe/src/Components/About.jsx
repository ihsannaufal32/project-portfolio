import reactLogo from '../assets/React.png'
import viteLogo from '../assets/Vite.png'
import nodelogo from '../assets/Node.js.png'
import ubuntulogo from '../assets/Ubuntu.png'
import { useState } from 'react'

function About(){
    const [count, setCount] = useState(0)
    return(
        <div>
            <h1>Teknologi yang digunakan</h1>
            <div class="flex flex-row items-center place-content-center	">
                <a href="https://vitejs.dev" target="_blank">
                    <img id="logovite" src={viteLogo} class="h-52" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} class="h-40 px-10" alt="React logo" />
                </a>
                <a href="">
                    <img src={nodelogo} class="h-40" alt="node logo" />
                </a>
                <div>
                    <a href="">
                        <img src={ubuntulogo} className="h-40" alt="" />
                    </a>
                    <p className='text-center'>24.01 LTS</p>
                </div>
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
        </div>
    );
};

export default About