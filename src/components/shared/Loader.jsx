import React from 'react'
import loader from '../assets/loader.gif'

function Loader() {
  return (
    <img src={loader} alt='Loading...' style={
        {width:'100px', margin:'auto', display:'block'}
    }
    />
    
  )
}

export default Loader