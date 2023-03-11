import React from 'react'
import './footer.css'
import {ImLinkedin, ImGithub} from 'react-icons/im'
export default function footer() {
  return (
    <footer><a href="#" className='footer__logo'>Akhil Narahari</a>
    <ul className='permalinks'>
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="experience">Experience</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>

    <div className="footer__socials">
      <a href="https://www.linkedin.com/in/akhil-narahari/"><ImLinkedin/></a>
      <a href="https://www.linkedin.com/in/akhil-narahari/"><ImGithub/></a>
    </div>

    <div className="footer__copyright">
      <small>&copy; AKHIL NARAHARI. All rights reserved</small>
    </div>
    </footer>
  )
}
