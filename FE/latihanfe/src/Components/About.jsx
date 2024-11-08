import reactLogo from '../assets/React.png'
import viteLogo from '../assets/Vite.png'
import nodelogo from '../assets/Node.js.png'
import ubuntulogo from '../assets/Ubuntu.png'
import { useState } from 'react'

function About(){
    const [count, setCount] = useState(0)
    return(
        <div className='container mx-auto'>
            <h1>About</h1>
            <hr />
            <p>
                Web ini merupakan proyek portofolio yang bertujuan untuk menunjukan  proses pembelajaran saya mengaplikasikan seluruh pengetahuan saya mulai dari Front-end development, Back-end development, System Adminisrator, dan DevOps.
            </p>
            <h2>Teknologi yang digunakan</h2>
            <div className="flex flex-wrap items-center place-content-center">
                <div>
                    <a href="https://vitejs.dev" target="_blank">
                        <img id="logovite" src={viteLogo} class="h-52" alt="Vite logo" />
                    </a>
                </div>
                <div>
                    <a href="https://react.dev" target="_blank">
                        <img src={reactLogo} class="h-40 px-10" alt="React logo" />
                    </a>
                </div>
                <div>
                    <a href="">
                        <img src={nodelogo} class="h-40" alt="node logo" />
                    </a>    
                </div>
                <div>
                    <a href="">
                        <img src={ubuntulogo} className="h-40" alt="" />
                    </a>
                    <p className='text-center'>24.01 LTS</p>
                </div>
            </div>
        </div>
    );
};

export default About