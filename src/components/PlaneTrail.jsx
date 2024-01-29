function PlaneTrail({rotation, size, x, y, color}){

    return(
        <div style={
            {
                width:size + "px",
                height: size/3 + "px",
                backgroundColor: color,
                transform: `rotateZ(${rotation}deg)`, 
                position: 'absolute',
                left: x,
                top: y,
            }
        }>
            
        </div>
            )

}

export default PlaneTrail;