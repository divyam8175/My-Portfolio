import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const Contact = () => {
  return (
    <>
    <div className="container contact" id="contact">
        <h1>CONTACT ME</h1> 
        <div className="contact-icon"
        data-aos="zoom-in-up"
        data-aos-duration="1000"
        >
            <a href="https://www.instagram.com/divyam9147/" target="_blank" className="items"><FaInstagram  className="icons"/></a>
            <a href="http://www.google.com" target="_blank" className="items"><FaFacebook className="icons" /></a>
            <a href="http://www.linkedin.com/in/divyam208011" target="_blank" className="items"><FaLinkedin  className="icons"/></a>
            <a href="https://x.com/Divyamv3334" target="_blank" className="items"><FaSquareXTwitter  className="icons"/></a>
            <a href="https://github.com/divyam8175" target="_blank" className="items"><FaGithub  className="icons"/></a>
            <a href="mailto:divyamverma147@gmail.com" target="_blank" className="items"><BiLogoGmail  className="icons"/></a>
        </div>
    </div>
    </>
  )
}

export default Contact
