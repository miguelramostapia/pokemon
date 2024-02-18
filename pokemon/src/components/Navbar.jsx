import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";
import logo from "../../public/vite.svg";

function BasicExample() {
    const setActiveClass = ({ isActive }) => (isActive ? "textoMenu active" : "textoMenu inactive");

    return (
        <nav>
            <div className="links">
                <NavLink className={setActiveClass} to='/'>Home</NavLink>
                <NavLink className={setActiveClass} to='/Pokemon'>Pokemon</NavLink>
            </div>
            <div>
                <img className="imagen-logo" src={logo} alt="imagen no se puede encontrar" />
            </div>
        </nav>
    );
}

export default BasicExample;
