import { Injectable } from '@angular/core';
import { Empleado } from './empleado';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  private baseURL = "http://localhost:8080/empleados/todos";

   constructor(private httpClient: HttpClient) { }

   obtenerListaDeEmpleados():Observable<Empleado[]>{
     return this.httpClient.get<Empleado[]>(`${this.baseURL}`);
   }

}
