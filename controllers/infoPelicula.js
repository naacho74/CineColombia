import { peliculas } from "../helpers/peliculas.js";

let peliculaSeleccionada= sessionStorage.getItem('pelicula');
console.log(peliculas)

let peli=peliculas.filter(pelicula=>pelicula.nombre==peliculaSeleccionada);
console.log(peli);

