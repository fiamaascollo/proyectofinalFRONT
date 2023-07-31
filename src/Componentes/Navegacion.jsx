import React from "react";
import '../css/Navegacion.css'
import { NavLink } from "react-router-dom";
import volkswagen from "../img/volkswagen.ico";

const Navegacion = () => {
    return (
      <nav className="navbar">
        <a href="/" className="navbar-logo">
          <img src={volkswagen} alt="Logo" className="navbar-logo" />
        </a>
  
        <ul className="nav-items">
          <li className="nav-item">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </li>
  
          <li className="nav-item">
            <NavLink to="/vehiculos" className="nav-link">
              Vehículos
            </NavLink>
          </li>
  
          <li className="nav-item">
            <NavLink to="/concesionarios" className="nav-link">
              Concesionarios
            </NavLink>
          </li>
  
          <li className="nav-item">
            <NavLink to="/contacto" className="nav-link">
              Contacto
            </NavLink>
          </li>
  
          <li className="nav-item">
            <NavLink to="/login" className="nav-link">
              Login
            </NavLink>
          </li> 
        </ul>
        
      </nav>
    );
  };
  

export default Navegacion;