import React from 'react'
import { NavLink } from 'react-router-dom'
import NavLogo from '../Final_Logo.png'
import '../App.css'
const Navbar = () => {
  const colorblu = {
    color: '#0c62aa',
  }
 
  return (
    <>
      <nav class="navbar stroke navbar-expand-lg sticky-top text-black">
        <div class="container-fluid">
          <a class="navbar-brand mx-2" href="#">
          <img class="img-fluid h-15 w-25" src={NavLogo} alt="not found" style={{ borderRadius: "20px" }}/>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon text-black" style={colorblu}></span>
          </button>
          <div class="collapse navbar-collapse mr-auto" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item mx-2">
                <a
                  class="nav-link active" style={colorblu}
                  aria-current="page"
                  href="#">
                  Home
                </a>
              </li>
              <li class="nav-item mx-2">
                <a class="nav-link " style={colorblu} href="#">
                  About us
                </a>
              </li>
              <li class="nav-item mx-2">
                <a class="nav-link " style={colorblu} href="#">
                  Activities
                </a>
              </li>
              <li class="nav-item mx-2">
                <a class="nav-link" style={colorblu} href="#">
                  Curriculum
                </a>
              </li>
              <li class="nav-item mx-2">
                <a class="nav-link"  style={colorblu} href="#">
                  Events
                </a>
              </li>
              <li class="nav-item mx-2">
                <a class="nav-link" style={colorblu} href="#">
                  Career
                </a>
              </li>
              <li class="nav-item mx-2">
                <a class="nav-link" style={colorblu} href="#">
                  Admission
                </a>
              </li>
              <li class="nav-item mx-2">
                <a class="nav-link" style={colorblu} href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
export default Navbar