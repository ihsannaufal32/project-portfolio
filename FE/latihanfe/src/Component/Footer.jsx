import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faEnvelope, faAddressBook, faLocationDot} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faInstagram, faGithub, faDocker } from '@fortawesome/free-brands-svg-icons'
import sosmed from "Sosmed"
const icon = {faLinkedin, faInstagram, faGithub, faDocker}

function Footer(){
    return(
        <div className='bg-indigo-950'>
            <footer>
                <div className="flex flex-col px-5 sm:flex-row sm:px-0 container mx-auto justify-between">
                    <div className='text-left sm:text-left'>
                        <h2>Contact Person</h2>
                        <h3><FontAwesomeIcon icon={faEnvelope}/> naufalihsanwork@gmail.com</h3>
                        <h3><FontAwesomeIcon icon={faAddressBook}/> (+62) 851-7965-2605</h3>
                        <h3><FontAwesomeIcon icon={faLocationDot}/> Bandung, Indonesia</h3>
                    </div>
                    <div className='text-left sm:text-right'>
                        <h2>Sosial Media</h2>
                        {sosmed.slice(0,4).map((sosmed) => {
                            return(
                                <div key={sosmed.id}>
                                    <a href={sosmed.url}>
                                        <h3 className='text-white hover:text-gray-300'><FontAwesomeIcon icon={icon[sosmed.icon]}/> {sosmed.username} <FontAwesomeIcon icon={faExternalLinkAlt}/></h3>
                                    </a>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className='text-center bg-yellow-700 mt-5'>
                    <h3>Created by ❤️ 2024 @ Muhammad Ihsan Naufal Muniif</h3>
                </div>
            </footer>
        </div>
    )
}

export default Footer