import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function NerdList() {

    const [movies, setMovies] = useState([])
    const image_path = "https://image.tmdb.org/t/p/w500"

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYzA2ZTRlZjZlM2Y0ZmVhYTMzZDQ0Mjg4OGE4NjUwMyIsInN1YiI6IjY0YjU1YjZlMzc4MDYyMDBhZDE1YTYwNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.r02wz2QKgrirlour_iEOzI0Po2VeCehBJZEw6pkYe1Q'
        }
      };

      useEffect(() => {
        fetch('https://api.themoviedb.org/3/account/20162127/favorite/movies?language=en-US&page=1&sort_by=created_at.asc', options)
          .then(response => response.json())
          .then(data => setMovies(data.results))
    }, []);

    return (
        <section className="gallery-trend">
            <div className="wrapper">
                <h2 className="title">Geek Fans <img class="ico" src="/img/ico-nerd.svg" alt="movie.title"></img></h2>
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