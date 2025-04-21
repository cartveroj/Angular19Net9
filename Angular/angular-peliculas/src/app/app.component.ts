import { DatePipe, NgFor, NgIf, NgOptimizedImage, UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ListadoPeliculasComponent } from "./peliculas/listado-peliculas/listado-peliculas.component";


@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [ListadoPeliculasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  

  
  title = 'angular-peliculas';

}
