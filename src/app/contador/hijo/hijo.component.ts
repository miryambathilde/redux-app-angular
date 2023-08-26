import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: [ './hijo.component.css' ]
})
export class HijoComponent implements OnInit {
  // le pasamos el valor del contador del padre
  @Input() contador!: number;
  @Output() cambioContador = new EventEmitter<number>();

  constructor () { }

  ngOnInit (): void { }

  multiplicar () {
    this.contador *= 2;
    this.cambioContador.emit(this.contador);
  }

  dividir () {
    this.contador /= 2;
    this.cambioContador.emit(this.contador);
  }

}
