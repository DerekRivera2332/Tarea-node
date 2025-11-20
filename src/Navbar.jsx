import React from "react";
import "./Navbar.css";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <img
                    className="logo nodejs"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png"
                    alt="Logo Node.js"
                />

                <ul className="navbar-menu">
                    <li>Aprender</li>
                    <li>Acerca de</li>
                    <li>Descargar</li>
                    <li>Blog</li>
                    <li>Documentación</li>
                    <li>Contribución ↗</li>
                    <li>Certificación ↗</li>
                </ul>
            </div>

            <div className="buscador">
                <input type="text" placeholder="Buscar..." />
            </div>
        </nav>
    );
}

export default Navbar;
