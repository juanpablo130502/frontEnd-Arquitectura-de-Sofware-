import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';

@Component({
  selector: 'app-lista-empleados',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-empleados.component.html',
  styleUrl: './lista-empleados.component.css'
})
export class ListaEmpleadosComponent implements OnInit{

  empleados: Empleado[];

  constructor() {}
  //constructor(private empleadoServicio: EmpleadoService) {}

  ngOnInit(): void {
    this.empleados = [{
      "codigo":3497,
      "nombre": "Juan Pablo Mateus Pardo",
      "edad": 21,
      "rol": "Desarrollador de software",
      "email": "juanmatpa@hotmail.com",
      "numeroTelefonico": 3217851741,
      "responsabilidades": "blablabla"
    },
    {
      "codigo":8541,
      "nombre": "Juan Sebastian Viracacha Suares",
      "edad": 20,
      "rol":"Desarrollador de software",
      "email": "sebasvirasu@hotmail.com",
      "numeroTelefonico": 3104589632,
      "responsabilidades": "blablabla"
    },
    {
      "codigo":1739,
      "nombre": "Juan Esteban Villalobos Clavijo",
      "edad": 20,
      "rol":"Desarrollador de software",
      "email": "sebasvirasu@hotmail.com",
      "numeroTelefonico": 3118429538,
      "responsabilidades": "blablabla"
    }];
    
  }

  // private obtenerEmpleados(){
  //   this.empleadoServicio.obtenerListaDeEmpleados().subscribe(
  //     dato => {this.empleados = dato;}
  //   );
  // }

}
