import React from 'react'

import { BsBagHeartFill } from "react-icons/bs"
const Card = ({img,prevPrice,title,reviews,star,newPrice}) => {
  return (
  
    <section className='card'>
        <img
         src={img}
        className='card-img'
        alt={title}/>
        <div className='card-details'>
            <h3 className='card-title'>{title}</h3>
            <section className='card-reviews'>
                {star}{star}
                {star}{star}
             <span className="total-reviews">{reviews}</span>
            </section>
        </div>
        <section className="card-price">
            <div className='price'>
                INR <del>{`${prevPrice}/-`}</del> {`${newPrice}/-`}
            </div>
            <div className="bag-icon">
            <BsBagHeartFill />
            </div>
        </section>
    </section>

  )
}

export default Card
