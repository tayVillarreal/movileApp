import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { get } from "../utils/httpClient";
import styles from "../style/MoviesDetails.module.css"
import Rate from "../components/Rate"

function MoviesDetails(){
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        get("/movie/" + movieId).then((data) => {
          setMovie(data);
        });
      }, [movieId]);
    
      if (!movie) {
        return null;
      }
    const imageUrl = "https://image.tmdb.org/t/p/w400" + movie.poster_path;
    return(
    <div className={styles.detailsCard}>
        <img className={`${styles.col} ${styles.movieImage}`} src={imageUrl} alt={movie.title}/>
        <div className={`${styles.col} ${styles.movieDetails}`}>
            <p className={styles.firstItem}>
                <strong>Title:</strong> {movie.title}
            </p>
            <p> <strong>Genres: </strong>
                {movie.genres.map(genre => genre.name).join(", ")}
            </p>
            <p><strong>Descripcion:</strong> {movie.overview} </p>
            <Rate/>
        </div>
    </div>
    );
}
export default MoviesDetails