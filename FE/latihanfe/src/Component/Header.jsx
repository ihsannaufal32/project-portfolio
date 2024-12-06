import { useEffect, useState } from 'react'
import { TypeAnimation } from 'react-type-animation'

function Header(){
    const [data, setData] = useState('');
    useEffect(() => {
        // Ganti URL dengan alamat server Express kamu
        fetch('http://192.168.1.26:8080/')
        .then(response => response.json())
        .then(data => setData(data.data[0].username))
        .catch(error => console.error('Error fetching data:', error));
    }, []);
    return(
        <div className='bg-black'>
            <div className='container mx-auto'>
                <h1 className='text-center select-none'> 
                <TypeAnimation
                    sequence={[
                        'Selamat Datang!',
                        2000,
                        'Welcome!',
                        2000,
                        'ようこそ!',
                        2000,
                        'Bienvenido!',
                        2000,
                        'Добро пожаловать!',
                        3000,
                    ]}
                    wrapper="span"
                    cursor={true}
                    repeat={Infinity}
                    />
                </h1>
                <h1>
                    Halo! {data}
                </h1>
            </div>
        </div>
    );  
};

export default Header