import { Component, NgModule } from '@angular/core';
import {FormControl, ReactiveFormsModule, FormGroup} from '@angular/forms';
import { AxiosService } from '../../axios.service';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {

  profileForm = new FormGroup({  
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private axiosService: AxiosService) {}  // 'private' para poder acessar o serviço dentro da classe

  submitLogin() {
    this.axiosService.request(  // Acessando via 'this.axiosService'
      '/login',
      'POST',
      {
        username: this.profileForm.controls['username'].value,
        password: this.profileForm.controls['password'].value,
      }
    ).then(response => {
      console.log('Login successful:', response);
    }).catch(error => {
      console.error('Login failed:', error);
    });

    // Correção para exibir os valores no console
    console.log('Username:', this.profileForm.controls['username'].value);
    console.log('Password:', this.profileForm.controls['password'].value);
  }
}
