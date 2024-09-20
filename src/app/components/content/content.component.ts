import { Component } from '@angular/core';
import { WelcomeContentComponent } from "../welcome-content/welcome-content.component";
import { ButtonsComponent } from '../buttons/buttons.component';
import { LoginFormComponent } from "../login-form/login-form.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [WelcomeContentComponent, ButtonsComponent, LoginFormComponent, CommonModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

  componentToShow = "welcome";

  atLogin() {
    this.componentToShow = "login";
  }

  atLogout() {
    this.componentToShow = "welcome";
  }
}
