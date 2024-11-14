import { useEffect, useState } from 'react'

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
        <div>
            <h1 className="py-5 pl-5">Halo <span class="font-bold">{data}</span>, Selamat datang!</h1>
        </div>
    );
};

export default Header