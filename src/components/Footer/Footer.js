import React from 'react';
import "../Footer/footer.css";
import {FaPaw,FaInstagram,FaTwitter,FaFacebookSquare,FaPhoneAlt} from "react-icons/fa";
import {MdEmail} from "react-icons/md";

const Footer = () => {
    return (
        <div>
             <footer className="footer">
       
           <div className='brand-items'>
           <a href="#" className="brandName">
              <FaPaw className="paw-icon" />
              PetPals.
              <h5>Adopt your best friend!</h5>
            </a>

            <div className='socials'>
              <a href='#' ><FaInstagram/></a>
              <a href='#' ><FaTwitter/></a>
              <a href='#' ><FaFacebookSquare/></a>
            </div>
           </div>

            <div className="details">
              <h5>Need our help?</h5>
              <h2>Our support is here for you 24/7</h2>

              <div className="info">
                <h2><FaPhoneAlt/>  0000 000 000</h2>
                <h2><MdEmail/> petpals@gmail.com</h2>
              </div>
            </div>
        </footer>
        </div>
    );
}

export default Footer;
