import React from 'react'
import Card from '../Components/Shared/Card'
import { Link } from 'react-router-dom'

function About() {
  return (
    <Card>
          <div className='about'> 
          <h1>About This Project</h1>
                This is a React based Responsive Review acceptance page.
                All rights reserved to the creator/owner of the system.
          <p>Version: 1.0.0 </p>
          <Link to='/'>Back to Home Page</Link>      
         </div>
    </Card>
   
  )
}

export default About
