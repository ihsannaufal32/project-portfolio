import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faGithub, faDocker } from '@fortawesome/free-brands-svg-icons'
import Sosmed from '../../Component/Sosmed.jsx';

const icon = {faLinkedin, faInstagram, faGithub, faDocker}

function developing(){
    return(
        <div className="flex flex-col text-center sm:flex h-screen items-center justify-center bg-gradient-to-t from-indigo-950 via-black to-black">
            <div className='select-none'>
                <h1>Mohon Maaf!</h1>
                <h2>Sorry!</h2>
                <h1>Server Dalam Tahap Pengembangan!</h1>
                <h2>Server Under Development!</h2>
            </div>
            <div className='flex flex-wrap sm:flex-row'>
                {Sosmed.slice(0,4).map((sosmed) => {
                    return(
                        <div key={sosmed.id} className="px-5 sm:px-10">
                            <a href={sosmed.url}>
                                <h1 className='text-white hover:text-yellow-300'><FontAwesomeIcon icon={icon[sosmed.icon]}/></h1>
                            </a>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default developing