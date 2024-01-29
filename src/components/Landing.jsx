import NavBar from "./Navbar";
import Button from "./Button";
import ItalyClipart from "./ItalyClipart";
import PlaneClipart from "./PlaneClipart";
import PlaneTrail from "./PlaneTrail";
import "../styles/Landing.scss"
function Landing(){
    return(
        <section className="landing-page" >
        <NavBar/>   
        <div className="landing-page-content">
        <div className="landing-text-container">
            <h1 className="brand">AL VOLO</h1>
            <h2 className="slogan">A Taste of Italy, Here in Rufforth </h2>
            <a><h3 className="location">Rufforth Airfield East, Wetherby Rd, Rufforth, YO23 3QA</h3></a>

            <Button text="Make A Reservation"/>
        </div>

        <div className="landing-image-container">
        <PlaneClipart className="landing-page-plane" size="500" rotation="250" x="-500px" y="-300px"/>
        <ItalyClipart className="landing-page-italy" size="500" y="0px" x="30px"/>
        <PlaneTrail size = "100"  rotation="25" x="-150px" y="120px" color="#169842"/>
        <PlaneTrail size = "100"  rotation="50" x="-40px" y="195px" color="#fff"/>
        <PlaneTrail size = "100"  rotation="70" x="30px" y="310px" color="#E20B18"/>

        </div>
        </div>
        </section>
    )
}

export default Landing