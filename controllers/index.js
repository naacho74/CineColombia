import{peliculas} from '../helpers/peliculas.js';
import { pintarPeliculas } from './pintarPeliculas.js';

let enCartelera=peliculas.filter(peli => 
peli.categoria =='cartelera')

let filaEnCartelera=document.getElementById('cartelera');

pintarPeliculas(enCartelera,filaEnCartelera);



let muyPronto=peliculas.filter(peli => 
    peli.categoria =='pronto')

let filaMuyPronto=document.getElementById('muyPronto');   

pintarPeliculas(muyPronto,filaMuyPronto);










