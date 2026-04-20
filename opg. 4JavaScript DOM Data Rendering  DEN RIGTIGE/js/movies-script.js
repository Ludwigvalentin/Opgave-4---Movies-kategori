"use strict";

const movies = [
{
    id: 1,
    title: "Inception",
    genre: "science-fiction",
    year: "2010",
    duration: "2.28",
    img: "img/inception.webp",
    url: "https://www.imdb.com/title/tt1375666/"
},
{
    id: 2,
    title: "The Dark Knight",
    genre: "action",
    year: "2008",
    duration: "2.32",
    img: "img/the-dark-knight.webp",
    url: "https://www.imdb.com/title/tt0468569/"
},
{
    id: 3,
    title: "Forrest Gump",
    genre: "drama",
    year: "1994",
    duration: "2.22",
    img: "img/forrest-gump.webp",
    url: "https://www.imdb.com/title/tt0109830/"
},
{
    id: 4,
    title: "Superbad",
    genre: "comedy",
    year: "2007",
    duration: "1.53",
    img: "img/superbad.webp",
    url: "https://www.imdb.com/title/tt0829482/"
},
{
    id: 5,
    title: "It",
    genre: "horror",
    year: "2017",
    duration: "2.15",
    img: "img/it.webp",
    url: "https://www.imdb.com/title/tt1396484/"
},
{
    id: 6,
    title: "The Hangover",
    genre: "comedy",
    year: "2009",
    duration: "1.4",
    img: "img/the-hangover.webp",
    url: "https://www.imdb.com/title/tt1119646/"
},
{
    id: 7,
    title: "The Conjuring",
    genre: "horror",
    year: "2013",
    duration: "1.52",
    img: "img/the-conjuring.webp",
    url: "https://www.imdb.com/title/tt1457767/"
},
{
    id: 8,
    title: "Interstellar",
    genre: "science-fiction",
    year: "2014",
    duration: "2.55",
    img: "img/interstellar.webp",
    url: "https://www.imdb.com/title/tt0816692/"
},
{
    id: 9,
    title: "The Matrix",
    genre: "science-fiction",
    year: "1999",
    duration: "3.02",
    img: "img/the-matrix.webp",
    url: "https://www.imdb.com/title/tt0133093/"
},
{
    id: 10,
    title: "Pulp Fiction",
    genre: "drama",
    year: "1994",
    duration: "1.39",
    img: "img/pulp-fiction.webp",
    url: "https://www.imdb.com/title/tt0110912/"
}
];

const moviesContainer = document.getElementById("movies-container");
const selectedCategory = document.getElementById("category-select");
const searchInput = document.getElementById("gsearch");
const form = document.querySelector("form");

function displayMovies(movieList) {
  const html = movieList.map((item) => {
    return `
      <article>
        <img src="${item.img}" alt="${item.title}">
        <h2>${item.title}</h2>
        <h3>${item.genre}</h3>
        <p>Year: ${item.year}</p>
        <p>Duration: ${item.duration} hours</p>
        <a href="${item.url}" target="_blank">View on IMDb</a>
      </article>
    `;
  }).join("");
  moviesContainer.innerHTML = html;
}

displayMovies(movies);


// Mangler at lave funktionen filterMovies()

function filterMovies() {
    const selectedValue = selectedCategory.value;
    const searchTerm = searchInput.value.toLowerCase().trim();

    let filteredMovies = movies;
    
    if (selectedValue != "alle") { 
        filteredMovies = filteredMovies.filter((item) => {
            return item.genre === selectedValue;
        });
    }

    if (searchTerm != "") {
        filteredMovies = filteredMovies.filter((item) => {
            return item.title.toLowerCase().includes(searchTerm)
        });
    }

    displayMovies(filteredMovies);
}
//menu som lytter efter ændringer i dropdown-menuen og kalder filter-funktionen
selectedCategory.addEventListener("change", filterMovies);

//sætte en addeventlistener på søgefeltet, som lytter efter input og kalder filter-funktionen
searchInput.addEventListener("input", filterMovies);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  filterMovies();
});

