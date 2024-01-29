import plane from "../assets/plane-full-icon.png"


function PlaneClipart ({size, rotation, x, y}){
    return(
    <img className="italy" src={plane} style={{ 
        width: size + "px", 
        height: (size*1.41) + "px", 
        transform: `rotateZ(${rotation}deg)`, 
        position: 'absolute',
        left: x,
        top: y,
    }}></img>
    )
}

export default PlaneClipart