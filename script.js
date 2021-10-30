function showCards(m){
    return `<div id="movie">
                <img src="${m.Poster}">
                <h5 id="movie-title">${m.Title}</h5>
            </div>`
}

fetch('http://www.omdbapi.com/?apikey=b7d63215&s=detective')
    .then(response => response.json())
    .then(response => {
        const movies = response.Search;
        let cards = '';
        movies.forEach(m => cards += showCards(m));
        console.log(movies);
        const movieContainer = document.getElementById('movieContainer')
        movieContainer.innerHTML = cards;
    });
