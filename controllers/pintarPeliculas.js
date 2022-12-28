
export function pintarPeliculas(peliculasAPintar, fila) {

    fila.innerHTML = '';

    peliculasAPintar.forEach(peli => {
        let tarjeta = document.createElement('div');
        tarjeta.classList.add('tarjeta');
        let foto = document.createElement('img');
        foto.src = peli.fotos[0]
        let detalles = document.createElement('div');
        detalles.classList.add('detalles');
        let nombre = document.createElement('h2');
        nombre.textContent = peli.nombre;
        let nombreIngles = document.createElement('h4');
        nombreIngles.textContent = peli.tituloIngles;
        let estreno = document.createElement('h6');
        estreno.textContent = peli.estreno;
        let genero = document.createElement('p');
        genero.textContent = peli.genero;
        let recomendacion = document.createElement('button');
        recomendacion.textContent = peli.recomendacion;
        let br = document.createElement('br');
        let br2 = document.createElement('br');
        let minutos = document.createElement('button');
        minutos.textContent = peli.duracion;





        fila.appendChild(tarjeta);
        tarjeta.appendChild(foto);
        tarjeta.appendChild(detalles);
        detalles.appendChild(nombre);
        detalles.appendChild(nombreIngles);
        detalles.appendChild(estreno);
        detalles.appendChild(genero);
        detalles.appendChild(recomendacion);
        detalles.appendChild(br);
        detalles.appendChild(br2);
        detalles.appendChild(minutos);

        function ampliarInfo(evento) {
            let nombrePeliculaSeleccionada = evento.target.parentElement.querySelector('h2').textContent;

            return nombrePeliculaSeleccionada;

        }

        tarjeta.addEventListener('click', (evento) => {


          let peliculaSeleccionada= ampliarInfo(evento)
            window.location.href='./views/infoPelicula.html'
            sessionStorage.setItem('pelicula',peliculaSeleccionada)
        })


    })





}

