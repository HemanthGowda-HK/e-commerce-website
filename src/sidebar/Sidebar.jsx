import React from 'react'
import './sidebars.css'
import Category from '../Categaries/Category'
import Price from './price/Price'
import Color from './colors/Color'
const Sidebar = ({handleChange}) => {
  return (
  <>
   <section className="sidebar">
      <div className="logo-container">
        <h1>🛒</h1>
      </div>
    <Category handleChange = {handleChange}/>
    <Price handleChange = {handleChange}/>
    <Color handleChange = {handleChange}/>
     </section>
  </>
    
    
  )
}

export default Sidebar
