$(function(){
    function renderWatchlist() {
        let watchlistJSON = localStorage.getItem('watchlist');
        let watchlist = JSON.parse(watchlistJSON);
        $('.watchlist-container').empty();
        for (let i = 0; i < watchlist.length; i++) {
            currentMovie = watchlist[i];
            $(".watchlist-container").append(`<div class="movie"><div class="card" style="width: 18rem;"><img class="card-img-top" src="${currentMovie.Poster}" alt="${currentMovie.Title}"><div class="card-body"><h5 class="card-title">${currentMovie.Title}</h5><p class="card-text">${currentMovie.Year}</p><a href="#" class="btn btn-primary" onclick="removeFromWatchlist('${currentMovie.imdbID}')">Remove</a></div></div></div>`)
        }
    }
    renderWatchlist();
});

function removeFromWatchlist(imdbID){
    //feature to add: remove from watchlist
    console.log("This feature is unavailable");
}