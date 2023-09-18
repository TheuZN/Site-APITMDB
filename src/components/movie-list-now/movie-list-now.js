import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function ListNow() {

    const [movies, setMovies] = useState([])
    const image_path = "https://image.tmdb.org/t/p/w500"

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_release_type=2&api_key=bc06e4ef6e3f4feaa33d442888a86503')
          .then(response => response.json())
          .then(data => setMovies(data.results))
      }, []);

    return (
        <section className="gallery-trend" id="now">
            <div className="wrapper">
                <h2 className="title">Now Playing <img class="ico" src="/img/ico-now.svg" alt=""></img></h2>
                <div className="gallery-wrapper">
                        <ul className="gallery">
                            {movies.map(movie => {
                                return (
                                    <Link to={`/details/${movie.id}`}>
                                        <li key={movie.id}>
                                            <img src={`${image_path}${movie.poster_path}`} alt=""/>
                                            <span className="average">{movie.vote_average.toFixed(1)}</span>
                                            <span className="title-movie">{movie.title}</span>
                                        </li>
                                    </Link>
                                    );
                            })}
                        </ul>
                </div>
            </div>
        </section>
    )     
}