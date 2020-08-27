$(function(){
    function renderWatchlist(watchlistArray) {
        watchlistArray.map((currentMovie) => {
            $(".watchlist-container").append(`<div class="movie"><div class="card" style="width: 18rem;"><img class="card-img-top" src="${currentMovie.Poster}" alt="${currentMovie.Title}"><div class="card-body"><h5 class="card-title">${currentMovie.Title}</h5><p class="card-text">${currentMovie.Year}</p><a href="#" class="btn btn-primary" onclick="saveToWatchlist('${currentMovie.imdbID}')">Add</a></div></div></div>`)
        })
    }
renderWatchlist(localStorage.getItem("watchlist")); 
});