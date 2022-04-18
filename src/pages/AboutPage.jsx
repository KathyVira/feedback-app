import React from 'react'
import Card from '../components/shared/Card'
import {Link} from 'react-router-dom'


function AboutPage() {
  return (
      <Card>
         <h1>About</h1>
         <p>This is a Reackt app to leave feedback for a product or service</p>
         <p>Version: 1.0.0</p>
         <p>
             <Link to='/'>Back to Home</Link>
         </p>
      </Card>
  )
}

export default AboutPage