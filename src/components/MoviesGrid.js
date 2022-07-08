import { useEffect , useState} from "react"
import { get } from "../utils/httpClient";
import MovieCard from "./MovieCard"
import style from "../style/MoviesGrid.module.css"
import shuffle from "lodash.shuffle"

function MoviesGrid(){
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    get("/discover/movie").then((data) => {
      setMovies(data.results);
    });
  }, []);
  const orderRandom=()=>{
    const orderRandomMovies = shuffle(movies)
    setMovies(orderRandomMovies)
  }

    return( 
      <>
       <button className={style.button} onClick={orderRandom}>random</button>
        <ul className={style.moviesGrid}>
           {movies.map((movie) => (
             <MovieCard key={movie.id} movie={movie}/>
           ))}
        </ul>
        </>
        ); 
}
export default MoviesGrid;