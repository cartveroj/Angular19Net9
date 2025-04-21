import { DatePipe, NgFor, NgIf, NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-peliculas',
  imports: [NgFor, NgIf, DatePipe, NgOptimizedImage],
  templateUrl: './listado-peliculas.component.html',
  styleUrl: './listado-peliculas.component.css'
})
export class ListadoPeliculasComponent implements OnInit{
  ngOnInit(): void {

    setTimeout(()=>{

      this.peliculas = [
        {
          titulo: "Spider Man",
          fecha: new Date(),
          genero: "acción",
          director: "Sam Raimi",
          calificacion: 8.5,
          imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Spider-Man.jpg/1024px-Spider-Man.jpg"
        },
        {
          titulo: "Inception",
          fecha: new Date("2010-07-16"),
          genero: "ciencia ficción",
          director: "Christopher Nolan",
          calificacion: 8.8,
          imagen: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tXQvtRWfkUUnWJAn2tN3jERIUG.jpg"
        },
        {
          titulo: "The Godfather",
          fecha: new Date("1972-03-24"),
          genero: "drama",
          director: "Francis Ford Coppola",
          calificacion: 9.2,
          imagen: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/5HlLUsmsv60cZVTzVns9ICZD6zU.jpg"
        },
        {
          titulo: "The Dark Knight",
          fecha: new Date("2008-07-18"),
          genero: "acción",
          director: "Christopher Nolan",
          calificacion: 9.0,
          imagen: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/8QDQExnfNFOtabLDKqfDQuHDsIg.jpg"
        },
        {
          titulo: "Pulp Fiction",
          fecha: new Date("1994-10-14"),
          genero: "crimen",
          director: "Quentin Tarantino",
          calificacion: 8.9,
          imagen: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/hNcQAuquJxTxl2fJFs1R42DrWcf.jpg"
        }

      ]
        
    },2000);
  }

  peliculas!: any[]; 

}
