import React from 'react'
import "./styles.css";

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <ul>
        <li>Todo</li>
        <li>In Progress</li>
        <li>Done</li>
        <li>Cancelled</li>
      </ul>

    </div>
  )
}

export default Navbar