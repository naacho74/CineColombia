import { peliculas } from "../helpers/peliculas.js";

//variables
let peliculaSeleccionada= sessionStorage.getItem('pelicula');
let peli=peliculas.filter(pelicula=>pelicula.nombre==peliculaSeleccionada);
let tituloPestana=document.getElementById('titulo');
let video=document.getElementById('video');
let imagenFondo=document.getElementById('imagen__fondo');
let foto= document.getElementById('foto');
let nombrePelicula=document.getElementById('nombre');
let nombreIngles=document.getElementById('nombreIngles');
let estreno=document.getElementById('estreno');
let genero=document.getElementById('genero');
let edad=document.getElementById('edad');
let duracion=document.getElementById('duracion');
let reproductor=document.getElementById('reproductor');
let reproductorParaActivar=document.getElementById('reprocutorParaActivar');
let cerrarReproductor=document.getElementById('cerrarReproductor');

//asignacion
tituloPestana.textContent=peli[0].nombre;
imagenFondo.src=peli[0].fotos[1];
video.src=peli[0].trailer;
foto.src=peli[0].fotos[0];
nombrePelicula.textContent=peli[0].nombre;
nombreIngles.textContent=peli[0].tituloIngles;
estreno.textContent=peli[0].estreno;
genero.textContent=peli[0].genero;
edad.textContent=peli[0].recomendacion;
duracion.textContent=peli[0].duracion;

//eventos
reproductor.addEventListener('click',()=>{ 
reproductorParaActivar.classList.add('ampliarInfo__reproductor-activado');
video.src=peli[0].trailer;
})

cerrarReproductor.addEventListener('click',()=>{
reproductorParaActivar.classList.remove('ampliarInfo__reproductor-activado');  
video.src=''; 
})