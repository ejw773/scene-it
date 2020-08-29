$(function(){
    function renderMovies(movieArray) {
        movieArray.map((currentMovie) => {
            $(".movie-container").append(`<div class="movie"><div class="card" style="width: 18rem;"><img class="card-img-top" src="${currentMovie.Poster}" alt="${currentMovie.Title}"><div class="card-body"><h5 class="card-title">${currentMovie.Title}</h5><p class="card-text">${currentMovie.Year}</p><a href="#" class="btn btn-primary" onclick="saveToWatchlist('${currentMovie.imdbID}')">Add</a></div></div></div>`)
        })
    }
    $('form').submit(function(e){
        e.preventDefault();
        let searchString = document.getElementById("search-me").value;
        let urlEncodedSearchString = encodeURIComponent(searchString);
        axios.get("http://www.omdbapi.com/?apikey=8534d2a7&s=" + urlEncodedSearchString)
        .then(function(response) {
            $('.movie-container').empty();
            renderMovies(response.data.Search);    
        })
    }) 
});


// Feature to add: do not allow duplicates
function saveToWatchlist(imdbID) {
    axios.get("http://www.omdbapi.com/?apikey=8534d2a7&i=" + imdbID)
    .then(function(response) {
        var movieToAdd = response.data;
        var watchlistJSON = localStorage.getItem('watchlist');
        var watchlist = JSON.parse(watchlistJSON);
        if (watchlist === null) {
            watchlist = [];
        } else {
            var watchlist = JSON.parse(watchlistJSON);
        };
        watchlist.push(movieToAdd);
        watchlistJSON = JSON.stringify(watchlist);
        localStorage.setItem('watchlist', watchlistJSON);
    })
}