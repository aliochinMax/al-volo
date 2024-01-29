import italy from "../assets/italy-clipart-gold-with-shadow.png"


function ItalyClipart ({size, x, y}){
    return(
    <img className="italy" src={italy} style={
        {width:size+"px", 
        height:size*1.41+"px" ,
        position: 'absolute',
        left: x,
        top: y,
    }}></img>
    )
}

export default ItalyClipart