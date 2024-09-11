import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  //passar dentro do component as variaveis
  /*
  title = "Mine Page";
  logoPath = "assets/angular.png";*/

  //Receber as variaveis vinda do app.component.html
  @Input() title = "" ;
  @Input() logoPath = "";
}
