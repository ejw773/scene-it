$(function(){
    function renderMovies(movieArray) {
        movieArray.map((currentMovie) => {
            $(".movie-container").append(`<div class="movie"><div class="card" style="width: 18rem;"><img class="card-img-top" src="${currentMovie.Poster}" alt="${currentMovie.Title}"><div class="card-body"><h5 class="card-title">${currentMovie.Title}</h5><p class="card-text">${currentMovie.Year}</p><a href="#" class="btn btn-primary" onclick="saveToWatchlist('${currentMovie.imdbID}')">Add</a></div></div></div>`)
        })
    }
    $('form').submit(function(e){
        e.preventDefault();
        $('.movie-container').empty();
        renderMovies(movieData);
    })
    
});

function saveToWatchlist(imdbID) {
    var movie = movieData.find(function(currentMovie) {
        return currentMovie.imdbID == imdbID;
    var watchlistJSON = localStorage.getItem('watchlist');
    var watchlist = JSON.parse(watchlistJSON);
    if (watchlist === null) {
        watchlist = [];
    } else {
        var watchlist = JSON.parse(watchlistJSON);
    };
    console.log(imdbID);
    watchlist.push(movie);
    watchlistJSON = JSON.stringify(watchlist);
    localStorage.setItem('watchlist', watchlistJSON);
    });
}