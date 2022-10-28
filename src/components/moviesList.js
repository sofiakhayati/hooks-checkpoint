import React, {useState} from 'react'
import AddMovie from './AddMovie.js'
import MovieCard from './movieCard.js'
function MoviesList(props) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const { Movies, addMovieFn} = props
    return (
        <div style={{display:"flex", justifyContent:"space-around", flexDirection:"column"}}>
            <div style={{display:"flex", justifyContent:"space-around", flexWrap:"wrap"}}>
            {Movies.map(
                (elt) => 
                <div>
                    <MovieCard poster={elt.Poster} title={elt.Title} type={elt.Type} year={elt.Year} rate={elt.rate}/> 
                </div>  
            )} 
            </div> 
            <div>
                <button onClick={handleShow} style={{backgroundColor:" rgb(102, 133, 31)",color:"white",fontSize:'170%', border:"5px solid white", width:"50px", height:"50px"}}>+</button>
                <AddMovie handleClose={handleClose} show={show} addMovieFn={addMovieFn}/>  
            </div>
            
        </div>
    )
}
export default MoviesList
