import React from 'react'
import {BsLinkedin, BsGithub} from 'react-icons/bs'

export default function HeaderSocials() {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/akhil-narahari/" target='_blank'><BsLinkedin/></a>
        <a href="https://www.github.com"><BsGithub/></a>
    </div>
  )
}
