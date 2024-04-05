import React from 'react'
import Input from '../../components/Input'
import './prices.css'

const Price = ({handleChange}) => {
  return (
    <div className='ml'>
      <h2 className="sidebar-title price-title">Price</h2>
      <label className="sidebar-label-container">
      <input type="radio" handleChange={handleChange} value="" name="test2" />
      <span className="checkmark"></span>
      All
      </label>
      <Input
       handleChange={handleChange}
       value={5000}
       title="INR 5000-15000"
       name="test2"
      />
            <Input
       handleChange={handleChange}
       value={35000}
       title="INR 15000-37000"
       name="test2"
      />
            <Input
       handleChange={handleChange}
       value={50000}
       title="INR 37000-50000"
       name="test2"
      />
            <Input
       handleChange={handleChange}
       value={75000}
       title="INR 50000-80000"
       name="test2"
      />
    </div>
  )
}

export default Price
