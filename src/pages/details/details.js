import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";
import Header from "../../components/header/header"
import Footer from "../../components/footer/footer"
import "./details.css";


export default function Details() {
    const { id } = useParams()
    const [movie, setMovie, setCredits] = useState({})
    const image_path = "https://image.tmdb.org/t/p/w500"

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=bc06e4ef6e3f4feaa33d442888a86503&language=en-US`)
        .then(response => response.json())
        .then(data => {

            const movie = {
                id,
                title: data.title,
                overview: data.overview,
                image: `${image_path}${data.poster_path}`,
                genres: data.genres[0].name,
                runtime: data.runtime,
                popularity: data.popularity,
                release: data.release_date,
                average: data.vote_average.toFixed(1),
                revenue: data.revenue
            }
            setMovie(movie);
        });
    }, [id]);

    return (
        <div>
            <Header/>
                <section className="wrapper">
                    <div className="detail">
                        <div className="col-a">
                            <img src={movie.image}/>
                        </div>
                        <div className="col-b">
                            <h1>{movie.title}</h1>
                            <span><b>Average: {movie.average}</b></span>
                            <span><b>Overview:</b> {movie.overview}</span>
                            <span><b>Genre:</b> {movie.genres}</span>
                            <span><b>Time:</b> {movie.runtime} mins</span>
                            <span><b>Popularity:</b> {movie.popularity}</span>
                            <span><b>Release:</b> {movie.release}</span>
                            <span><b>Revenue:</b> {movie.revenue}</span>
                            <Link to="/"><button>Back to Home</button></Link>
                        </div>
                    </div>    
                </section>
            <Footer/>
        </div>
    )
}