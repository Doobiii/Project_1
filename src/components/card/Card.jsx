import React from 'react'
import './Card.css'
import Cardimg from '../images/img1.jpg';
const Card = ({title,content}) => {
  return (
    <div className="containerrr">
            <article className="card__article">
               <img src={Cardimg} alt="card-img" className="card__img" />

               <div className="card__data">
                  <span className="card__description">{content}</span>
                  <h2 className="card__title">{title}</h2>
                 
               </div>
            </article>
      </div>
  )
}

export default Card