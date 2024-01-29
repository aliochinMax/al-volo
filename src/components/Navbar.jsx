import Button from "./Button.jsx"
import NavButton from "./NavButton.jsx"
import Logo from "./Logo.jsx"
import "../styles/Navbar.scss"
function NavBar (){

    return(
        <nav>   
        <Logo size={100}/>
        <div className="nav-button-container">
            <NavButton text="Menu"/>
            <NavButton text="Parties"/>
            <NavButton text="Events"/>
            <NavButton text="Careers"/>
            <NavButton text="Contact"/>
            </div>
        <Button text="Book Now"/>
        </nav>    
            )
}

export default NavBar