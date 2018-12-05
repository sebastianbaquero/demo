import { Component } from '@angular/core';

//Decorador de angular
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'Sebastián';
  apellido = 'Baquero';
}
