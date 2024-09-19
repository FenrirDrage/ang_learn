import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.css'
})
export class ButtonsComponent {

  /* As funções podem ficar aqui como podem ficar no "parent"
    atLogin() {

  }

  atLogout() {

  } */
  /* Aqui vai ao "parent" buscar o evento que deve fazer*/ 
  @Output() loginClick = new EventEmitter();
  @Output() logoutClick = new EventEmitter();

}
