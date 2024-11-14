import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faInstagram, faGithub, faDocker } from '@fortawesome/free-brands-svg-icons'
function Footer(){
    return(
        <div>
            <footer>
                <div className="flex flex-row bg-red-700">
                    <div className="basis-1/2 justify-items-start">
                        <div className="ml-10 py-5">
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
                    <div className="basis-1/2 justify-items-end">
                    <div className='mr-10 py-5 text-right'>
                        <h2>Contact Person</h2>
                            <h3>naufalihsanwork@gmail.com</h3>
                            <h3>(+62) 851-7965-2605</h3>
                            <h3>Bandung, Indonesia</h3>
                    </div>
                    </div>
                </div>
                
            </footer>
        </div>
    )
}

export default Footer