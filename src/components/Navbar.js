import React from "react";
import { NavLink } from "react-router-dom";
import '../App.css';
const Navbar=()=>{
    
    return(
      <>
      <nav class="navbar stroke navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand m-1" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse mr-auto" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item m-3">
          <a class="nav-link active text-danger" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item m-3">
          <a class="nav-link text-primary" href="#">About us</a>
        </li>
        <li class="nav-item m-3">
          <a class="nav-link text-warning" href="#">Activities</a>
        </li>
        <li class="nav-item m-3">
          <a class="nav-link text-success" href="#">Curriculum</a>
        </li>
        <li class="nav-item m-3">
          <a class="nav-link text-info" href="#">Events</a>
        </li>
        <li class="nav-item m-3">
          <a class="nav-link highlighter-rouge" href="#">Career
</a>
        </li>
        <li class="nav-item m-3">
          <a class="nav-link" href="#">Admission
</a>
        </li>
        <li class="nav-item m-3">
          <a class="nav-link" href="#">Contact</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>

</>
    );
}
export default Navbar;