import React from 'react'

const Card = (props) => {
  return (
    <div className="timeline__item">
        <i className={props.icon}></i>
        <span className='title__date'>{props.year}</span>
        <h3 className="title__title">{props.title}</h3>
        <p className="title__text">{props.desc}</p>
    </div>
  )
}

export default Card
