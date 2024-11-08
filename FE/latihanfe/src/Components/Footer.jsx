function Footer(){
    return(
        <div>
            <footer>
                <div className="flex flex-row">
                    <div className="basis-1/2 justify-items-left bg-blue-700">
                        <div className="ml-10 py-5">
                        <h1>Sosial Media</h1>
                        <a href="https://www.instagram.com/ihsannaufal32" className="text-white hover:text-red-700">
                            <h3>instagram: Ihsannaufal32</h3>
                        </a>
                        <a href="https://www.linkedin.com/in/ihsannaufal32/" className="text-white hover:text-red-700">
                            <h3>LinkedIn: ihsannaufal32</h3>
                        </a>
                        <a href="https://github.com/ihsannaufal32" className="text-white hover:text-red-700">
                            <h3>GitHub: ihsannaufal32</h3>
                        </a>
                        <a href="https://hub.docker.com/u/ihsannaufal32" className="text-white hover:text-red-700">
                            <h3>DockerHub: Ihsannaufal32</h3>
                        </a>
                        </div>
                    </div>
                    <div className="basis-1/2 justify-items-center bg-violet-700">
                        <h1> Hello Footer 2</h1>
                    </div>
                </div>
                
            </footer>
        </div>
    )
}

export default Footer