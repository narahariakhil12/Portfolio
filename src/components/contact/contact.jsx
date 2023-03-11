import React, { useRef } from 'react'
import './contact.css'
import {MdEmail} from 'react-icons/md'
import {ImLinkedin, ImGithub} from 'react-icons/im'
import emailjs from 'emailjs-com'
export default function Contact() {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1r2ll4j', 'template_ukdbxno', form.current, 'xOKzPE8NKjgFMPmWc')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>narahariakhil1@gmail.com</h5>
            <a href="mailto:narahariakhil1@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <ImLinkedin className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <h5>Akhil Narahari</h5>
            <a href="https://www.linkedin.com/in/akhil-narahari/" target="_blank">View Profile</a>
          </article>
          <article className="contact__option">
            <ImGithub className='contact__option-icon'/>
            <h4>Github</h4>
            <h5>Akhil Narahari</h5>
            <a href="mailto:narahariakhil1@gmail.com" target="_blank">View Profile</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}
