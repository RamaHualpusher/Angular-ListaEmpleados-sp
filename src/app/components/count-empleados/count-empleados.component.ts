import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-count-empleados',
  templateUrl: './count-empleados.component.html',
  styleUrls: ['./count-empleados.component.css']
})
export class CountEmpleadosComponent {
  @Input() todos: number;
  @Input() hombres: number;
  @Input() mujeres: number;
  @Input() masculinoSeleccionado: number;
  @Output() countRBChange = new EventEmitter<string>();
  rbSeleccionado:string = 'T';

  constructor() { }

  ngOnInit(): void {}


  radioChange(){
    this.countRBChange.emit(this.rbSeleccionado);
  }
}
