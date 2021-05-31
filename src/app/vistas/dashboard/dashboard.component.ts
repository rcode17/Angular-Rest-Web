import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../servicios/api/api.service';

import {Colaboradores} from '../../modelos/colaboradores.interface'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  colaboradores: Colaboradores[] = []  ;

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.api.getColaboradores().subscribe(resp => {

      console.log(resp)
      this.colaboradores=resp;
      
       
     })
  }

  editarColaborador(identificacion:any){

    console.log(identificacion);

  }

}
