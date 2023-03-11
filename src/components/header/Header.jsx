import React from "react";
import "./Header.css";
import CTA from './CTA'
import ME from '../../assets/Akhil_pic.png'
import HeaderSocial from './HeaderSocials'

export default function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I am</h5>
        <h1>Akhil Narahari</h1>
        <h5 className="text-light">Frontend Developer</h5> 
        <CTA />
        <HeaderSocial />
         

        <div className="me">
        <img src={ME} alt="my pic" /></div>
        <a href="contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  );
}
