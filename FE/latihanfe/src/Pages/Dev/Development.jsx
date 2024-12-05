import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faGithub, faDocker } from '@fortawesome/free-brands-svg-icons'

function developing(){
    return(
        <div className="flex flex-col text-center sm:flex h-screen items-center justify-center bg-gradient-to-t from-indigo-950 to-black">
            <h1>Mohon Maaf!</h1>
            <h1>Server Dalam Tahap Pengembangan!</h1>
            <h2>Sorry!</h2>
            <h2>Server Under Development!</h2>
            <div className='flex flex-wrap sm:flex-row'>
            <a href="https://www.instagram.com/ihsannaufal32" className="text-white px-5 sm:px-10 hover:text-grey-700">
                <h1><FontAwesomeIcon icon={faInstagram}/></h1>
            </a>
            <a href="https://www.linkedin.com/in/ihsannaufal32/" className="text-white px-5 sm:px-10 hover:text-grey-700">
                <h1><FontAwesomeIcon icon={faLinkedin}/></h1>
            </a>
            <a href="https://github.com/ihsannaufal32" className="text-white px-5 sm:px-10 hover:text-grey-700">
                <h1><FontAwesomeIcon icon={faGithub}/></h1>
            </a>
            <a href="https://hub.docker.com/u/ihsannaufal32" className="text-white px-5 sm:px-10 hover:text-grey-700">
                <h1><FontAwesomeIcon icon={faDocker}/></h1>
            </a>
            </div>
        </div>
    );
};

export default developing