import { FiHeart } from 'react-icons/fi'
import { AiOutlineShoppingCart, AiOutlineUserAdd } from 'react-icons/ai'
import React from 'react'
import './nav.css'

const Navbar = () => {
  return (
    <nav>
      <div className="nav-container">
        <input type="text" className='search-input' placeholder=' search shoes'/>
      </div>
      <div className="profile-container">
        <a href="/favorites">
          <FiHeart className='nav-icons' />
        </a>
        <a href="/cart">
          <AiOutlineShoppingCart className='nav-icons' />
        </a>
        <a href="/login">
          <AiOutlineUserAdd className='nav-icons' />
        </a>
      </div>
    </nav>
  )
}

export default Navbar
