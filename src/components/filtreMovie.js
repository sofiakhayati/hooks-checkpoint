import React from 'react'
import ReactStars from "react-rating-stars-component";
function FiltreMovie({search, searchFilter, rate}) {
  const ratingChanged = (rate) => {
    searchFilter(rate);
      }
const handleChange = (event) => {
search(event.target.value)
}
  return (
    <div style={{display:"flex", justifyContent:"space-around",alignItems:"center", width:"60%", margin:"1%"}}>
        <input type="text" 
        onChange={handleChange}
        placeholder='Search For Movie' 
        style={{border:"5px solid rgb(164, 205, 50)"}}/>
        <div>
              <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={24}
                  activeColor="rgb(173, 81, 138)"
                  value={rate}
              />     
        </div>
    </div>
  )
}
export default FiltreMovie
