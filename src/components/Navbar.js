import React from 'react'
import { NavLink } from 'react-router-dom'
import '../App.css'
const Navbar = () => {
  const colorblu = {
    color: '#ad1457',
  }
  const colorpur = {
    color: '#00e676    ',
  }
  const colorgren = {
    color: '#00FFAB',
  }
  const colororange = {
    color: '#fb8c00',
  }
  return (
    <>
      <nav class="navbar stroke navbar-expand-lg fixed-top ">
        <div class="container-fluid">
          <a class="navbar-brand mx-2" href="#">
          <img class="img-fluid h-50 w-75" src="http://blueswanpublicschool.in/index.html" alt="not found" style={{ borderRadius: "20px" }}/>
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
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse mr-auto" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item mx-2">
                <a
                  class="nav-link active text-danger red-text"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li class="nav-item mx-2">
                <a class="nav-link text-primary blue-text" href="#">
                  About us
                </a>
              </li>
              <li class="nav-item mx-2">
                <a class="nav-link text-warning yellow-text" href="#">
                  Activities
                </a>
              </li>
              <li class="nav-item mx-2">
                <a class="nav-link text-success green-text" href="#">
                  Curriculum
                </a>
              </li>
              <li class="nav-item mx-2">
                <a class="nav-link lightblu-text"  style={colororange} href="#">
                  Events
                </a>
              </li>
              <li class="nav-item mx-2">
                <a class="nav-link bluedot-text" style={colorblu} href="#">
                  Career
                </a>
              </li>
              <li class="nav-item mx-2">
                <a class="nav-link lightpurple-text" style={colorpur} href="#">
                  Admission
                </a>
              </li>
              <li class="nav-item mx-2">
                <a class="nav-link lightgreen-text" style={colorgren} href="#">
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