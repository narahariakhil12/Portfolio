import React from 'react'
import './about.css'
import ME from '../../assets/Akhil pic.jpg'
import {FaAward, FaUserGraduate} from 'react-icons/fa'

export default function about() {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1.5 year</small>
            </article>
            <article className='about__card'>
              <FaUserGraduate className='about__icon'/>
              <h5>Education</h5>
              <small>1.5 year</small>
            </article>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1.5 year</small>
            </article>
          </div>
          <p>shbdhsbd</p>
          <a href="#contact" className='btn btn-primary'>Lets Talk</a>
        </div>
      </div>
    </section>
  )
}
