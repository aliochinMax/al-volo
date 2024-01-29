import logo from "../assets/AL-VOLO-ROUND.png"


function Logo ({size}){
    return(
    <img className="logo" src={logo} style={{width:size+"px", height:size+"px" }}></img>
    )
}

export default Logo