import Navbar from "./navbar";
import "../componentStyles/header.css";

function Header() {
    return <>
        <section className="header-main-sec">
            <nav className="nav-sec">
                <Navbar/>
            </nav>
        </section>
    </>
}

export default Header;