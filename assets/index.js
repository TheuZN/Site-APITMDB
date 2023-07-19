/*=== MOBILE MENU =================================*/

function menuShow() {
    let menuMobile = document.querySelector('.mobile-nav');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.menu-mobile').src = "assets/img/open.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.menu-mobile').src = "assets/img/close.svg";
    }
}

function closeMenu() {
    let menuMobile = document.querySelector('.mobile-nav');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.menu-mobile').src = "assets/img/open.svg";
    }
}

/*=== MOBILE MENU =================================*/

/*=== TMDB API =================================*/

const API_KEY = "api_key=bc06e4ef6e3f4feaa33d442888a86503";
const API_BASE = "https://api.themoviedb.org/3/";

const API_POPULARITY = API_BASE + "discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&" + API_KEY;
const API_TOPRATED = API_BASE + "discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200&" + API_KEY;
const API_NOWPLAYING = API_BASE + "discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_release_type=2&" + API_KEY;
const API_BESTSERIES = API_BASE + "discover/tv?include_adult=false&language=en-US&page=1&sort_by=vote_average.desc&vote_count.gte=200&" + API_KEY;
const API_AIRSERIES = API_BASE + "discover/tv?include_adult=false&language=en-US&page=1&sort_by=popularity.desc&air&" + API_KEY;

const API_MOVIEPAGE = API_BASE + "discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&" + API_KEY;
const API_SERIEPAGE = API_BASE + "discover/tv?include_adult=false&language=en-US&page=1&sort_by=popularity.desc&" + API_KEY;



const API_IMG = "https://image.tmdb.org/t/p/w500";

const mainT = document.getElementById("gallery-trending");
const mainR = document.getElementById("gallery-rated");
const mainN = document.getElementById("gallery-now");
const mainS = document.getElementById("gallery-series");
const mainA = document.getElementById("gallery-air");

const mainMovie = document.getElementById("gallery-movie");
const mainSerie = document.getElementById("gallery-serie");

getMoviesS(API_BESTSERIES);
getMoviesP(API_POPULARITY);
getMoviesR(API_TOPRATED);
getMoviesN(API_NOWPLAYING);
getMoviesA(API_AIRSERIES);

getMoviesMovie(API_MOVIEPAGE);
getMoviesSerie(API_SERIEPAGE);

function getMoviesP(url) {
  fetch(url).then(res => res.json()).then(data => { showMoviesP(data.results); });
}
function getMoviesR(url) {
    fetch(url).then(res => res.json()).then(data => { showMoviesR(data.results); });
}

function getMoviesN(url) {
    fetch(url).then(res => res.json()).then(data => { showMoviesN(data.results); });
}

function getMoviesS(url) {
    fetch(url).then(res => res.json()).then(data => { showMoviesS(data.results); });
}

function getMoviesA(url) {
    fetch(url).then(res => res.json()).then(data => { showMoviesA(data.results); });
}

function getMoviesMovie(url) {
  fetch(url).then(res => res.json()).then(data => { showMoviesMovie(data.results); });
}

function getMoviesSerie(url) {
  fetch(url).then(res => res.json()).then(data => { showMoviesSerie(data.results); });
}

function showMoviesSerie(data) {
  data.forEach(movie => {
      const { title, poster_path, vote_average } = movie;

    const movieCard = document.createElement("div");
    movieCard.classList.add("card-movie");
    movieCard.innerHTML = `
      <img src="${API_IMG + poster_path}" alt="${title}">
      <div class="card-info">
        <h3 class="title-movie">${title}</h3>
        <span class="rating">${vote_average}</span>
      </div>
    `;

    mainSerie.appendChild(movieCard);
  });
}

function showMoviesMovie(data) {
  data.forEach(movie => {
    const { title, poster_path, vote_average } = movie;

    const movieCard = document.createElement("div");
    movieCard.classList.add("card-movie");
    movieCard.innerHTML = `
      <img src="${API_IMG + poster_path}" alt="${title}">
      <div class="card-info">
        <h3 class="title-movie">${title}</h3>
        <span class="rating">${vote_average}</span>
      </div>
    `;

    mainMovie.appendChild(movieCard);
  });
}

function showMoviesP(data) {
  data.forEach(movie => {
    const { title, poster_path, vote_average } = movie;

    const movieCard = document.createElement("div");
    movieCard.classList.add("card-movie");
    movieCard.innerHTML = `
      <img src="${API_IMG + poster_path}" alt="${title}">
      <div class="card-info">
        <h3 class="title-movie">${title}</h3>
        <span class="rating">${vote_average}</span>
      </div>
    `;

    mainT.appendChild(movieCard);
  });
}

function showMoviesR(data) {
    data.forEach(movie => {
      const { title, poster_path, vote_average } = movie;
  
      const movieCard = document.createElement("div");
      movieCard.classList.add("card-movie");
      movieCard.innerHTML = `
        <img src="${API_IMG + poster_path}" alt="${title}">
        <div class="card-info">
          <h3 class="title-movie">${title}</h3>
          <span class="rating">${vote_average}</span>
        </div>
      `;
  
      mainR.appendChild(movieCard);
    });
  }
  
function showMoviesN(data) {
    data.forEach(movie => {
      const { title, poster_path, vote_average } = movie;
  
      const movieCard = document.createElement("div");
      movieCard.classList.add("card-movie");
      movieCard.innerHTML = `
        <img src="${API_IMG + poster_path}" alt="${title}">
        <div class="card-info">
          <h3 class="title-movie">${title}</h3>
          <span class="rating">${vote_average}</span>
        </div>
      `;
  
      mainN.appendChild(movieCard);
    });
  }

function showMoviesS(data) {
    data.forEach(movie => {
      const { title, poster_path, vote_average } = movie;
  
      const movieCard = document.createElement("div");
      movieCard.classList.add("card-movie");
      movieCard.innerHTML = `
        <img src="${API_IMG + poster_path}" alt="${title}">
        <div class="card-info">
          <h3 class="title-movie">${title}</h3>
          <span class="rating">${vote_average}</span>
        </div>
      `;
  
      mainS.appendChild(movieCard);
    });
  }

  function showMoviesA(data) {
    data.forEach(movie => {
      const { title, poster_path, vote_average } = movie;
  
      const movieCard = document.createElement("div");
      movieCard.classList.add("card-movie");
      movieCard.innerHTML = `
        <img src="${API_IMG + poster_path}" alt="${title}">
        <div class="card-info">
          <h3 class="title-movie">${title}</h3>
          <span class="rating">${vote_average}</span>
        </div>
      `;
  
      mainA.appendChild(movieCard);
    });
  }


/*=== TMDB API =================================*/
