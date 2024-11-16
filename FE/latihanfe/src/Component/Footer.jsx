import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faEnvelope, faAddressBook, faLocationDot} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faInstagram, faGithub, faDocker } from '@fortawesome/free-brands-svg-icons'
function Footer(){
    return(
        <div className='bg-gradient-to-r from-red-900 to-violet-900'>
            <footer>
                <div className="container mx-auto flex flex-wrap justify-between">
                    <div className='text-left'>
                        <h2>Contact Person</h2>
                        <h3><FontAwesomeIcon icon={faEnvelope}/> naufalihsanwork@gmail.com</h3>
                        <h3><FontAwesomeIcon icon={faAddressBook}/> (+62) 851-7965-2605</h3>
                        <h3><FontAwesomeIcon icon={faLocationDot}/> Bandung, Indonesia</h3>
                    </div>
                    <div className='text-right'>
                        <h2>Sosial Media</h2>
                        <a href="https://www.instagram.com/ihsannaufal32" className="text-white hover:text-grey-700">
                            <h3><FontAwesomeIcon icon={faInstagram}/> /Ihsannaufal32 <FontAwesomeIcon icon={faExternalLinkAlt}/></h3>
                        </a>
                        <a href="https://www.linkedin.com/in/ihsannaufal32/" className="text-white hover:text-grey-700">
                            <h3><FontAwesomeIcon icon={faLinkedin}/> /ihsannaufal32 <FontAwesomeIcon icon={faExternalLinkAlt}/></h3>
                        </a>
                        <a href="https://github.com/ihsannaufal32" className="text-white hover:text-grey-700">
                            <h3><FontAwesomeIcon icon={faGithub}/> /ihsannaufal32 <FontAwesomeIcon icon={faExternalLinkAlt}/></h3>
                        </a>
                        <a href="https://hub.docker.com/u/ihsannaufal32" className="text-white hover:text-grey-700">
                            <h3><FontAwesomeIcon icon={faDocker}/> /Ihsannaufal32 <FontAwesomeIcon icon={faExternalLinkAlt}/></h3>
                        </a>
                    </div>
                </div>
                <div className='text-center bg-red-900'>
                    <h3>Created by ❤️ 2024 @ Muhammad Ihsan Naufal Muniif</h3>
                </div>
            </footer>
        </div>
    )
}

export default Footer