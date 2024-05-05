import cardstyle from "./colorcard.module.css"

function Card({stylecolor,hexcode,colorName}){
    return(
        <>
        <div className={cardstyle.outercard}>
        
        <div className={cardstyle.showcolor} style={{backgroundColor:`${stylecolor}`}}>
          
        </div>
            

        <div className={cardstyle.colorcode}>
            <p style={{fontWeight:"900",fontSize:"20px"}}>{hexcode}</p>
            <b style={{color:`${stylecolor}`,marginTop:"-15px"}}>{colorName}</b>
        </div>
        </div>
        </>
    )
}

export default Card;