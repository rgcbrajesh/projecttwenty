import React from 'react'
import "./Style.css"
import { Link } from 'react-router-dom'

export default function Home() {
  return (
   <div className="main-div">
    <div className="nav">
       <h5 className=' mt-4' >WELCOME TO TWENTY HUB</h5>
    </div>
    <h3>Please Select Your Subject</h3>
    <Link to='/bca1' >
    <div className="pdf-icon"><span> <p className='sub' >BCA-1</p> </span></div>
    </Link>
    <Link to='/bcom1' >
    <div className="pdf-icon"> <span><p className='sub' >B.Com-1</p> <h3>Computer</h3> </span></div>
    </Link>
   </div>
  )
}
