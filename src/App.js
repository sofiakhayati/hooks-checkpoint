
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {useState} from "react"
import MoviesList from './components/moviesList';
import FiltreMovie from './components/filtreMovie';

function App() {
  const [movies, setMovies] = useState(
    [
      {
          "Title": "Starwars: Goretech",
          "Year": "2018",
          "imdbID": "tt9336300",
          "Type": "movie",
          "rate":3,
          "Poster": "https://m.media-amazon.com/images/M/MV5BNTI5OTBhMGYtNTZlNS00MjMzLTk5NTEtZDZkODM5YjYzYmE5XkEyXkFqcGdeQXVyMzU0OTU0MzY@._V1_SX300.jpg"
      },
      {
          "Title": "MeUndies x StarWars: The Dark Side",
          "Year": "2018",
          "imdbID": "tt9414858",
          "Type": "movie",
          "rate":4,
          "Poster": "https://m.media-amazon.com/images/M/MV5BMzg3ZDcwNDQtOTVlMC00ZjE0LThiYjktY2U2YTVjODU5MWY5XkEyXkFqcGdeQXVyNjg3MDM0MzE@._V1_SX300.jpg"
      },
      {
          "Title": "MeUndies x StarWars: The Force",
          "Year": "2018",
          "imdbID": "tt9414918",
          "Type": "movie",
          "rate":5,
          "Poster": "https://m.media-amazon.com/images/M/MV5BZTdjYjM1YzgtYmViMS00ODFjLTgyM2EtMjRkNTFiNDEyMTU2XkEyXkFqcGdeQXVyNjg3MDM0MzE@._V1_SX300.jpg"
      },
      
      {
          "Title": "The StarWars Adventures",
          "Year": "2016",
          "imdbID": "tt5814352",
          "Type": "series",
          "rate":3,
          "Poster": "https://m.media-amazon.com/images/M/MV5BNWNkOGIyN2ItNGEwYS00ZTM2LWIyMzgtNjUxMzJmMjViZTE4XkEyXkFqcGdeQXVyMzM4MTY3ODg@._V1_SX300.jpg"
      },
      {
        "Title": "Star Wars: Episode IV - A New Hope",
        "Year": "1977",
        "imdbID": "tt0076759",
        "Type": "movie",
        "rate":4,
        "Poster": "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg"
    },
    {
        "Title": "Star Wars: Episode V - The Empire Strikes Back",
        "Year": "1980",
        "imdbID": "tt0080684",
        "Type": "movie",
        "rate":5,
        "Poster": "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
    },
    {
        "Title": "Star Wars: Episode VI - Return of the Jedi",
        "Year": "1983",
        "imdbID": "tt0086190",
        "Type": "movie",
        "rate":2,
        "Poster": "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
    },
    {
        "Title": "Star Wars: Episode VII - The Force Awakens",
        "Year": "2015",
        "imdbID": "tt2488496",
        "Type": "movie",
        "rate":2,
        "Poster": "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg"
    },
    {
        "Title": "Star Wars: Episode I - The Phantom Menace",
        "Year": "1999",
        "imdbID": "tt0120915",
        "Type": "movie",
        "rate":5,
        "Poster": "https://m.media-amazon.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
    },
    {
        "Title": "Star Wars: Episode III - Revenge of the Sith",
        "Year": "2005",
        "imdbID": "tt0121766",
        "Type": "movie",
        "rate":2,
        "Poster": "https://m.media-amazon.com/images/M/MV5BNTc4MTc3NTQ5OF5BMl5BanBnXkFtZTcwOTg0NjI4NA@@._V1_SX300.jpg"
    },
    {
        "Title": "Star Wars: Episode II - Attack of the Clones",
        "Year": "2002",
        "imdbID": "tt0121765",
        "Type": "movie",
        "rate":3,
        "Poster": "https://m.media-amazon.com/images/M/MV5BMDAzM2M0Y2UtZjRmZi00MzVlLTg4MjEtOTE3NzU5ZDVlMTU5XkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg"
    }
  ]
  )

//state filtre
const [keyword, setKeyword] = useState('')
const [rating, setRating] = useState(1)
const addMovieFn = (movie) => {
    setMovies(movies.concat(movie))
}
const searchMovie = (word) => {
    setKeyword(word)
}
const searchFilter = (rate) => {
setRating(rate)

}
  return (
    <div className="App">
    <div style={{border:"3px solid rgb(164, 205, 50)", margin:"2%", paddingLeft:"30%", backgroundColor:"  rgb(206, 223, 176)"}}>
        <FiltreMovie search={searchMovie} searchFilter={searchFilter}/>
    </div>
    <div style={{backgroundColor:"gray", margin:"2%", padding:"1%"}}>
    <MoviesList addMovieFn={addMovieFn} 
    Movies={movies.filter(
        (movies) => (movies.rate >= rating) && movies.Title.toUpperCase().includes(keyword.toUpperCase().trim())
      )}/>
    </div>
   
      
    </div>
  );
}

export default App;
