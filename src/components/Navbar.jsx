import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import burfas from '../assets/burfas.png'


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" >
  <div  className="container">
    <a  className="navbar-brand" href="#"><img src={burfas} width="100px"/></a>
    <button  className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span  className="navbar-toggler-icon"></span>
    </button>
    <div  className="collapse navbar-collapse" id="navbarNav">
      <ul  className="navbar-nav">
         <NavLink className="nav-link" to="/">ANASAYFA</NavLink>
         <NavLink className="nav-link" to="/subeler">TESİSLERİMİZ</NavLink>
         <NavLink className="nav-link" to="/menu">MENÜ</NavLink>
      </ul>
      
    </div>
  </div>
</nav>
  )
}

export default Navbar
