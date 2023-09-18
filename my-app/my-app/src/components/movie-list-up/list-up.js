import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function ListUp() {

    const [movies, setMovies] = useState([])
    const image_path = "https://image.tmdb.org/t/p/w500"

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&api_key=bc06e4ef6e3f4feaa33d442888a86503')
          .then(response => response.json())
          .then(data => setMovies(data.results))
    }, []);

    return (
        <section className="gallery-trend">
            <div className="wrapper">
                <h2 className="title">Upcoming <img class="ico" src="/img/ico-tvrated.svg" alt=""></img></h2>
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