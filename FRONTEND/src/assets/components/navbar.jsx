/* eslint-disable no-unused-vars */
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from "react-router-dom"
import "../componentStyles/navbar.css"
function Navbar() {
    return <>
        <section className='navbar-main-sec'>
            <nav className='navbar-container'>
                <ul className='nav-ul'>
                    <Link to="/">
                        <li className='nav-li nav-li-1'>
                            Home
                        </li>
                    </Link>
                    <Link to="/login">
                        <li className='nav-li nav-li-1'>
                            Login
                        </li>
                    </Link>
                </ul>
            </nav>
        </section>
    </>
}

export default Navbar;