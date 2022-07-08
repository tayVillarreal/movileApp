import style from "../style/MovieCard.module.css"
import { Link } from "react-router-dom";
import {useState} from 'react';

function MovieCard({movie}) {
  const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;

  const [disable, setDisable] = useState(false);
  return (
  <>
   <li className={style.movieCard}>
     <Link to={"/movies/" + movie.id}>
      <img 
      width={230} 
      height={345}
      className={style.movieImage} 
      src={imageUrl} 
      alt={movie.title}/>
      <div>{movie.title}</div>
      </Link>
      <button className={style.button} disabled={disable} onClick={() => setDisable(true)}>Duplicate</button>
    </li>
    {disable == false ? " " : <li className={style.movieCard}>
     <Link to={"/movies/" + movie.id}>
      <img 
      width={230} 
      height={345}
      className={style.movieImage} 
      src={imageUrl} 
      alt={movie.title}/>
      <div>{movie.title}</div>
      </Link>
      <button className={style.button} disabled={!disable} onClick={() => setDisable(false)}>Closed</button>
    </li>}
  </>  
  );
}
export default MovieCard