import React from 'react'
import {FaQuestion} from 'react-icons/fa'
import { Link } from 'react-router-dom'

function AboutIcon() {
  return (
    <div className='about-link'>
        <Link to='/About'>
        <FaQuestion size={20}/> 
        </Link>    
   </div>
  )
}

export default AboutIcon
