import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from "react-router-dom"
import "../componentStyles/navbar.css"
import { useState } from 'react';
function Navbar() {

    const [isOpen, setIsOpen] = useState(true);

    function toggleNav() {
        setIsOpen(!isOpen);
    }

    return <>
        <section className='navbar-main-sec' style={{
            backgroundColor: "#16423C"
        }}>
            <div className="menu-container" onClick={toggleNav}>
                <div className="menu-icons">
                    {
                        isOpen ? <CloseIcon/> : <MenuIcon/>
                    }
                </div>
                <nav className='navbar-container'>
                    <ul className={`${isOpen ? 'nav-open' : 'nav-close'} nav-ul`}>
                        <div className="nav-top-container">    
                            <Link to="/" className='nav-link nav-link1'>
                                <li className='nav-li nav-li1'>
                                    Home
                                </li>
                            </Link>
                            <Link to="/login" className='nav-link'>
                                <li className='nav-li'>
                                    Login
                                </li>
                            </Link>
                        </div>
                    </ul>
                </nav>
            </div>
        </section>
    </>
}

export default Navbar;