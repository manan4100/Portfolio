import React from 'react'
import {Link} from 'react-router-dom'
import '../../App.css'

const HomePage = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg text-header">
            <div className="container-fluid ">
                <Link className="navbar-brand text" to="/aboutme">About Me</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active text" aria-current="page" to="/qualification">Qualification</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link text" to="/professionaldetails">ProfessionalDetails</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link text" to="/ifam" data-toggle="tooltip" data-placement="left" title="Interesting facts about me">IFAM</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link text " to="/contact">Conatct Me</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        {/* <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid">
                

                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link text" aria-current="page" to="/home">Home</Link>
                        <Link className="nav-link text " to="/aboutme" >About Me</Link>
                        <Link className="nav-link text " to="/qualification" >Qualification</Link>
                        <Link className="nav-link text" to="/professionaldetails">ProfessionalDetails</Link>
                        <Link className="nav-link text" to="/ifam"  data-toggle="tooltip" data-placement="left" title="Interesting facts about me">IFAM</Link>
                        <Link className="nav-link text" to= "/contact">Contact</Link>
                    </div>

                </div>
            </div>
        </nav> */}

        
    </>
  )
}

export default HomePage