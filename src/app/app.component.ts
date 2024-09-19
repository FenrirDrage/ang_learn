import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { WelcomeContentComponent } from './components/welcome-content/welcome-content.component';
import { ContentComponent } from './components/content/content.component';
import { ButtonsComponent } from "./components/buttons/buttons.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, WelcomeContentComponent, ContentComponent, ButtonsComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ang_learn';
}
