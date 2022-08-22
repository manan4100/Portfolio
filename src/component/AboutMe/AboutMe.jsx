import React from 'react'
// import {BsFillCalendarDateFill} from 'react-icons/bs'
import '../../App.css'

const AboutMe = () => {
  return (
    <>
      <div className='pd-bg'>
        <h2 className="font ">About Me </h2><br/><br/>
        <span>
          <img src="mg.jpg" className="pics" alt="Avatar" style={{width:"200px"}}/>
        </span>
        <p className='p-font '>
          My name is Manan Gupta.<br/>
          My father name is Mr. Deepak Gupta.<br/>
          My mother name is Mrs. Vandana Gupta.<br/>
          My elder brother name is Arpan Gupta.<br/>
          I'm living in Chhatarpur,New delhi.<br/>
        </p>
        {/* <h3>Name : Manan Gupta</h3>
        <h3>DOB : 04/01/2000<BsFillCalendarDateFill/></h3>
        <h3>Address : New Delhi</h3> */}
      </div>
    </>
  )
}

export default AboutMe