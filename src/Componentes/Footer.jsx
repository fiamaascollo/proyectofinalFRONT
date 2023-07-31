import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div class="container">
            <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div class="col-md-4 d-flex align-items-center">
                    <a href="/" class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
                        <svg class="bi" width="30" height="24"><use xlink:href="#bootstrap"/></svg>
                    </a>
                    <span class="mb-3 mb-md-0 text-body-secondary">&copy; Volkswagen 2023</span>
                </div>

                <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li class="ms-3"><Link to= "https://www.instagram.com/vwargentina/?hl=es" target="_blank"><i class="bi bi-instagram" width="24" height="24"></i></Link></li>
                    <li class="ms-3"><Link to= "https://www.facebook.com/volkswagenARG/" target="_blank"><i class="bi bi-facebook" width="24" height="24"></i></Link></li>
                    <li class="ms-3"><Link to= "https://twitter.com/vwargentina" target="_blank"><i class="bi bi-twitter" width="24" height="24"></i></Link></li>
                </ul>
            </footer>
        </div>        
    )
}

export default Footer;