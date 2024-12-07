import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'
import { Navigate, useNavigate } from "react-router-dom";

export default function notfound (){
    const Navigate = useNavigate();
    return(
        <div className="flex flex-col text-center sm:flex h-screen items-center justify-center bg-gradient-to-t from-indigo-950 via-black to-black">
            <div className='select-none text-white'>
                <h1 className='text-red-500'><FontAwesomeIcon icon={faTriangleExclamation} /></h1>
                <h1>404 Not Found!</h1>
                <h1>Halaman yang anda cari tidak ada</h1>
                <button onClick={() => Navigate('/')} className='bg-white text-black mt-5'><h2>Kembali</h2></button>
            </div>
        </div>
    )
}