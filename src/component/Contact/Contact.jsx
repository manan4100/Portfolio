import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook,faLinkedin,faGithub,faInstagram,faTwitter,faTelegram,faEnvelope} from "@fortawesome/free-brands-svg-icons";
import '../../App.css'
// import { FontAwesomeIcon } from "fortawesome/react-fontawesome"
// import {faYoutube} from "fortawesome/free-brands-svg-icons";
// import { IconName } from "react-icons/fa"
// import {FaInstagram} from 'react-icons/fa'

const Contact = () => {
  return (
    <>
      <div className='color'>
        {/* <div className='contact'> */}
          <h2 className='contact' >Contact</h2>
        {/* </div> */}
        
          
          <div container="social-container">
            <FontAwesomeIcon icon={faFacebook}  className="facebook social" data-toggle="tooltip" data-placement="top" title="manangupta4100@gmail.com" size="4x"/>
            <FontAwesomeIcon icon={faInstagram} className="instagram social" data-toggle="tooltip" data-placement="top" title="Manan Gupta" size="4x" />
            <FontAwesomeIcon icon={faLinkedin} className="linkedin social" data-toggle="tooltip" data-placement="top" title="manangupta4100" size="4x"/>
            <FontAwesomeIcon icon={faGithub} className="github social" data-toggle="tooltip" data-placement="top" title="manan4100" size="4x"/>
            <FontAwesomeIcon icon={faTwitter} className="twitter social" data-toggle="tooltip" data-placement="top" title="manangupta4100" size="4x"/>
            <FontAwesomeIcon icon={faTelegram} className="telegram social" data-toggle="tooltip" data-placement="top" title="manan4100" size="4x"/>
            {/* <FontAwesomeIcon icon={faEnvelope} data-toggle="tooltip" data-placement="top" title="manangupta4100@gmail.com" size="4x"/> */}
            <i class="fa-thin fa-user"></i>
          </div>
          
          
       
        </div>
    </>
  )
}

export default Contact


// extra
// {/* <div class="social-container">
//             <h3>Social Follow</h3>
//             <a href="https://www.youtube.com/c/jamesqquick" className="youtube social"> <FontAwesomeIcon icon={faYoutube} size="2x" /></a>
//           </div> */}
// {/* <a href="#" class="fa fa-linkedin"></a> */}
//           {/* <h4><FaFacebook/>FaFacebook</h4> */}
// {/* <i class="fa fa-linkedin" aria-hidden="true"></i> */}
// <i class="fa fa-github" aria-hidden="true"></i>
// <i class="fa fa-address-book" aria-hidden="true"></i>
