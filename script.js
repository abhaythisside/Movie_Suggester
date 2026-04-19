/* ================= MOVIE DATA ================= */
/* Stores all movie information categorized by genre */
const movies = {

    /* Crime Thriller Movies */
    crime: [
        {
            name: "Seven",
            lead: "Brad Pitt",
            director: "David Fincher",
            rating: "8.6",
            img: "seven.jpg" // Add poster URL here
        },
        {
            name: "Prisoners",
            lead: "Hugh Jackman",
            director: "Denis Villeneuve",
            rating: "8.1",
            
            img: "prisioners2.jpg"
        },
        {
            name: "Fight Club",
            lead: "Brad Pitt",
            director: "David Fincher",
            rating: "8.8",
            img: "fightclub.jpg"
        
        }
    ],

    /* Romantic Movies */
    romantic: [
        {
            name: "La La Land",
            lead: "Ryan Gosling",
            director: "Damien Chazelle",
            rating: "8.0",
            img: "lalaland.jpg"
        },
        {
            name: "Lootera",
            lead: "Ranveer Singh",
            director: "Vikramaditya Motwane",
            rating: "7.3",
            img: "lootera.jpg"
        },
        {
            name: "The Notebook",
            lead: "Ryan Gosling",
            director: "Nick Cassavetes",
            rating: "7.8",
            img: "notebook.jpg"
        }
    ],

    /* Horror Movies */
    horror: [
        {
            name: "Hereditary",
            lead: "Toni Collette",
            director: "Ari Aster",
            rating: "7.3",
            img: "hereditary.jpg"
        },
        {
            name: "Tumbbad",
            lead: "Sohum Shah",
            director: "Rahi Anil Barve",
            rating: "8.2",
            img: "tumbbad.jpg"
        },
        {
            name: "The Conjuring",
            lead: "Vera Farmiga",
            director: "James Wan",
            rating: "7.5",
            img: "conjuring.jpg"
        }
    ],

    /* Top Rated Movies */
    top: [
        {
            name: "The Shawshank Redemption",
            lead: "Tim Robbins",
            director: "Frank Darabont",
            rating: "9.3",
            img: "redemption.jpg"
        },
        {
            name: "The Godfather",
            lead: "Al Pacino",
            director: "Francis Ford Coppola",
            rating: "9.2",
            img: "godfather.jpg"
        },
        {
            name: "The Dark Knight",
            lead: "Christian Bale",
            director: "Christopher Nolan",
            rating: "9.0",
            img: "knight.jpg"
        },
        {
            name: "LOTR: Return of the King",
            lead: "Elijah Wood",
            director: "Peter Jackson",
            rating: "9.0",
            img: "lotr3.jpg"
        },
        {
            name: "The Godfather Part II",
            lead: "Al Pacino",
            director: "Francis Ford Coppola",
            rating: "9.0",
            img: "godfather2.jpg"
        }
    ]
};



function showMovies(genre) {

    // Select the container where movies will be displayed
    const container = document.getElementById("movie-container");

    // Clear previous content
    container.innerHTML = "";

    // Loop through selected genre movies
    movies[genre].forEach(movie => {

        // Create a new div for each movie
        const card = document.createElement("div");
        card.classList.add("movie-card");

        // Insert movie details dynamically using template literals
        card.innerHTML = `
            <img src="${movie.img}" alt="poster">
            <h3>${movie.name}</h3>
            <p><b>Lead:</b> ${movie.lead}</p>
            <p><b>Director:</b> ${movie.director}</p>
            <p><b>IMDB:</b> ⭐ ${movie.rating}</p>
        `;

        // Add the card to the container
        container.appendChild(card);
    });
}