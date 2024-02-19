import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Done = () => {


    const navigate = useNavigate()

    const handleSubmit = () => {
        navigate('/')
    }
    

  return (
    <div>

    <h1>Booking Confirmed</h1>

    <button style={{padding:"10px", backgroundColor:"black", color:"white"}} 
         onClick={handleSubmit}
    >Go to Homepage</button>


    </div>
  )
}

export default Done