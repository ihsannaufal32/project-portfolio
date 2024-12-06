import { Navigate, useNavigate } from "react-router-dom";
import bulan from "../assets/moonbg.svg"

function Navbar(){
    const Navigate = useNavigate()
    return(
        <nav className="sticky z-10 top-0 bg-black flex flex-wrap justify-between px-10 py-2">
            <div className="flex flex-wrap">
                <div className="place-self-center mr-5">
                        <img src={bulan} onClick={() => Navigate('/')} className="size-10 cursor-pointer" alt="" />
                </div>
                <div className="ml-5 text-yellow-400 hidden sm:block">
                    <h2>Profil</h2>
                </div>
                <div className="mx-10 text-yellow-200 hidden sm:block">
                    <h2>Home</h2>
                </div>
                <div className="mr-5 text-yellow-600 hidden sm:block">
                    <h2>About</h2>
                </div>
                <div className="mr-5 hidden sm:block">
                    <button onClick={() => Navigate('/cek')}>Cek</button>
                </div>
            </div>
            <div>
                <button className="text-yellow-200">Dark</button>
            </div>
        </nav>
    );
};

export default Navbar

