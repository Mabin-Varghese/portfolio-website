import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio.png'
import IMG2 from '../../assets/portfolio-2.png'
import IMG3 from '../../assets/portfolio-3.png'
import IMG4 from '../../assets/portfolio-4.png'
import IMG5 from '../../assets/portfolio-5.png'
import IMG6 from '../../assets/portfolio-6.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Food Delivery App',
    github: 'https://github.com/Mabin-Varghese/food-delivery-app',
    demo: 'https://mabin-varghese.github.io/food-delivery-app/',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Movie App',
    github: 'https://github.com/Mabin-Varghese/movie-app',
    demo: 'https://mabin-varghese.github.io/movie-app/',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Weather App',
    github: 'https://github.com/Mabin-Varghese/Weather-App',
    demo: '',
  },
  {
    id: 4,
    image: IMG4,
    title: 'Modern UI-UX Website',
    github: 'https://github.com/Mabin-Varghese/GPT3-Modern-UI-UX-Website',
    demo: 'https://mabin-varghese.github.io/GPT3-Modern-UI-UX-Website/',
  },
  {
    id: 5,
    image: IMG5,
    title: 'Portfolio Website',
    github: 'https://mabin-varghese.github.io/Portfolio-Website/',
    demo: '#',
  },
  {
    id: 6,
    image: IMG6,
    title: 'Todo List',
    github: 'https://github.com/Mabin-Varghese/Todo-App-in-JavaScript',
    demo: 'https://mabin-varghese.github.io/Todo-App-in-JavaScript/',
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Porfolio</h2>
      
      <div className="container portfolio_container">
        {
          data.map(({id, image, title, github, demo}) => {
            return(
              <article className="portfolio__item" key={id}>
                <div className="portfolio__item-image">
                  <img src={image} alt="" />
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  <a href={github} className="btn" target='_blank' rel="noreferrer">Github</a>
                  <a href={demo} className="btn btn-primary" target='_blank' rel="noreferrer">Live Demo</a>
                </div>
              </article>
            )
          })
        }

      </div>
    </section>
  )
}

export default Portfolio