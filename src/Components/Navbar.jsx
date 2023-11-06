import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <div class="navbar-brand" href="#">Medium</div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <Link style={{textDecoration :"none"}} to="/home">
        <li class="nav-item">
          <div class="nav-link" aria-current="page">Home</div>
        </li></Link>
        <li class="nav-item">
          <div class="nav-link" >About us</div>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn " type="submit" style={{color: "#000", backgroundColor: "#fff", outlineColor: "#737373", outline: "2px"}}>Search</button>
      </form>
    </div>
  </div>
</nav>
      </div>
    );
  }

export default Navbar;