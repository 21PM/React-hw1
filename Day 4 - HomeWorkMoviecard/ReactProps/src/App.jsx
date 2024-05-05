import { useState } from 'react'
import './App.css'
import Card from './Components/Color/color'
import data from "./Components/ColorData.js"
import Moviecard from './Components/Movie/movie.jsx'
import MovieData from  "./Components/Moviedata.js"



// console.log(data);

function App() {


  {
    
  }

  return (
    <>
        <div className='Color'>  
        {
            data.map((ele)=>{
              return(
              
              <Card stylecolor={ele.color} hexcode={ele.code.hex} colorName={ele.color}></Card>
              )
            })
        }



        </div>

        <div className='Movie'>
          {/* <Moviecard/>
          <Moviecard/> */}

          {
            MovieData.map((ele)=>{
                return(
                  <Moviecard poster={ele.poster} name={ele.name} year={ele.year} hour={ele.hour} movietype={ele.movietype} summary={ele.summary} url={ele.imageurl} />
                )
            })
          }
        </div>
    </>
  )
}

export default App
