import { peliculas } from "../helpers/peliculas.js";

let peliculaSeleccionada= sessionStorage.getItem('pelicula');
console.log(peliculas)

let peli=peliculas.filter(pelicula=>pelicula.nombre==peliculaSeleccionada);
console.log(peli);

let reproductor=document.getElementById('reproductor');
let reproductorParaActivar=document.getElementById('reprocutorParaActivar')
reproductor.addEventListener('click',()=>{ 
reproductorParaActivar.classList.add('ampliarInfo__reproductor-activado');
})