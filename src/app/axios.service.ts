import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class AxiosService {

  constructor() {
    axios.defaults.baseURL = "http://localhost:8080";
    axios.defaults.headers.post['Content-Type'] = "application/json";  // Definindo o Content-Type corretamente
  }

  request(url: string, method: 'GET' | 'POST' | 'PUT' | 'DELETE', params: any): Promise<any> {
    return axios.request({
      method: method,
      url: url,
      data: params,  // Corrigido para usar 'params' como dados do request
    })
    .then(response => response.data)
    .catch(error => {
      console.error('Error in Axios request:', error);
      throw error;
    });
  }
}
