import React from 'react'
import './nav.css'
import {MdHomeFilled} from 'react-icons/md'
import {FaUser} from 'react-icons/fa'
import {BiBookAlt} from 'react-icons/bi'
import {HiMail} from 'react-icons/hi'
import { useState } from 'react'
export default function Nav() {
  const[activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={()=> setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><MdHomeFilled/></a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active': ''}><FaUser/></a>
      <a href="#experience" onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? 'active': ''}><BiBookAlt/></a>
      <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active': ''}><HiMail/></a>
    </nav>
  )
}
