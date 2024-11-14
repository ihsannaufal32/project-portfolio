function Navbar(){
    return(
        <div className="sticky z-10 top-0 justify-items-center bg-red-700">
                <nav>
                    <div className="flex flex-wrap py-3">
                        <div className="ml-5">
                            <h2>Profil</h2>
                        </div>
                        <div className="mx-10">
                            <h2>Home</h2>
                        </div>
                        <div className="mr-5">
                            <h2>About</h2>
                        </div>
                    </div>
                </nav>
        </div>
    );
};

export default Navbar

