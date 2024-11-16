function Navbar(){
    return(
        <nav className="sticky z-10 top-0 bg-gradient-to-r from-red-700 to-violet-700 flex flex-wrap justify-between px-10 py-2">
            <div className="flex flex-wrap">
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
            <div>
                <button>Dark</button>
            </div>
        </nav>
    );
};

export default Navbar

