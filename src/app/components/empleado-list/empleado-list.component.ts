import { Component } from '@angular/core';
import { Empleado } from 'src/app/models/Empleado';

@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.css']
})
export class EmpleadoListComponent {

  todos:number = 0;
  hombres:number = 0;
  mujeres:number = 0;
  rbSeleccionado:string = 'T';

  empleados: Empleado[] = [
    { legajo: 1, nombre: 'Juan', apellido: 'Perez', sexo: 'M', salario: 1000 },
    { legajo: 2, nombre: 'Ana', apellido: 'Gomez', sexo: 'F', salario: 2000 },
    { legajo: 3, nombre: 'Pedro', apellido: 'Gomez', sexo: 'M', salario: 3000 },
    { legajo: 4, nombre: 'Maria', apellido: 'Perez', sexo: 'F', salario: 4000 },
    { legajo: 5, nombre: 'Jose', apellido: 'Gomez', sexo: 'M', salario: 5000 },
  ];
  constructor() { 

    this.todos = this.getTodos();
    this.hombres = this.getHombres();
    this.mujeres = this.getMujeres();

  }

  ngOnInit(): void {}

  getTodos(){
    return this.todos = this.empleados.length;
  }

  getHombres(){
    return this.hombres = this.empleados.filter(e => e.sexo == 'M').length;
  }

  getMujeres(){
    return this.mujeres = this.empleados.filter(e => e.sexo == 'F').length;
  }
  empleadoChangeRB(rbSeleccionado:string){
    this.rbSeleccionado = rbSeleccionado;
    console.log(this.rbSeleccionado);
  }
}
