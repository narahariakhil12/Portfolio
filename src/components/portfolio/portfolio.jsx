import React from 'react'
import './portfolio.css'

export default function portfolio() {
  const data = [
    {
      id:1,
      image: 'IMG1',
      title:'Portfolio title',
      github:'https://github.com'
    }
  ]
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <div className="  container portfolio__container">
      {data.map(({id, image, title,github}) => {
        return( 
           <article key={id} className="portfolio__item" >
        <div className="portfolio__item-image">
          <img src={image} alt="" />
        </div>
        <h3>{title}</h3>
        <a href={github} className='btn btn-primary'>Github</a>
      </article>)
      
      })}
      </div>
    </section>
  )
}
