import "./hero-section.css";

export default function HeroSection() {
    return (
        <div id="hero-section">
            <div className="wrapper">

                <div className="col-a">
                    <div className="content">
                        <h4>Hi, welcome to FlickPicks <img className="ico" src="img/ico-movie.svg" alt=""/></h4>
                        <h1>Your site to choose the best movie for the night.</h1>
                        <p>Here you will find a wide range of films to suit all tastes. Browse, read synopses, and check user reviews to find the perfect film for your night. Get ready to immerse yourself in thrilling stories and enjoy an incredible cinematic experience with our FlickPicks.</p>
                    </div>
                </div>

                <div className="col-b">
                    <div className="banner">
                        <img src="/img/banner1.svg" alt=""/>
                    </div>
                </div>
        </div>
    </div>
    )
}
