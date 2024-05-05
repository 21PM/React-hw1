import moviestyle from "./moviestyle.module.css"
import love from "../../icons/love.png"
import message from "../../icons/message.png"
import sharenode from "../../icons/sharenode.png"


function Moviecard({poster,name,year,hour,movietype,summary,url}){



    




    return(
        <div className={moviestyle.outercard}>
                <div className={moviestyle.left}>
                
                <div className={moviestyle.top}>
                    <div className={moviestyle.poster}>
                        <img src={poster} width={100} height={100}></img>
                    </div>
                    
                        <div className={moviestyle.moviename}>

                            <h1>{name}</h1>
                            <a href="" className={moviestyle.anchor}>{year}</a>


                            <div className={moviestyle.hour}>
                                <button>{hour}</button>
                                <div>
                                <span>{movietype}</span>
                                </div>
                        </div>

                          
                    </div>
                    
                </div>
        
                <div className={moviestyle.summary}>
                        <p>{summary}</p>
                </div>

                <div className={moviestyle.icon}>
                <img src={sharenode} alt="share--v1"/>
                <img src={love} alt="share--v1"/>
                <img src={message} alt="share--v1"/>

                </div>

                </div>

               
                <div className={moviestyle.right}>
                    <img src={url}></img>
                </div>
        </div>
    )
}

export default Moviecard;