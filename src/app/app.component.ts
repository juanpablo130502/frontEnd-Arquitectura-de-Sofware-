import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ListaEmpleadosComponent } from "./lista-empleados/lista-empleados.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, ListaEmpleadosComponent]
})
export class AppComponent {
  title = 'Proyecto final arquitectura de software';
}
