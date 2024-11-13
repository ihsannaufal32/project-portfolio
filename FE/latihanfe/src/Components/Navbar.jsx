function Navbar(){
    return(
        <div className="justify-items-center bg-red-700 ">
            <nav>
                <div className="bg-white">
                    <div className="flex flex-wrap">
                        <div className="bg-violet-700">
                            <a href=""><h1>Profil</h1></a>
                        </div>
                        <div className="bg-green-700 mx-10">
                            <a href=""><h1>Home</h1></a>
                        </div>
                        <div className="bg-yellow-700">
                            <a href=""><h1>About</h1></a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar

