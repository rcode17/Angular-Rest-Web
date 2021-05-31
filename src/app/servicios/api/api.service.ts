import { Injectable } from '@angular/core';
import {Colaboradores} from '../../modelos/colaboradores.interface';
//import {Response} from '../../modelos//response.interface';

import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string = "https://h3nrpdngg7.execute-api.us-east-1.amazonaws.com/prod/colaboradores";

  constructor(private http:HttpClient) { }

  getColaboradores():Observable<any>{

    return this.http.get<any>(this.url)



  }



  
}
