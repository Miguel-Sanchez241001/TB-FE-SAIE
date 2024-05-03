import { Component, Input, OnInit } from '@angular/core';
import { EntidadModel, EntidadModelImpl, InterfazModel } from '../../models/model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {  HttpClientModule } from '@angular/common/http';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-a-table',
  templateUrl: './a-table.component.html',
  styleUrl: './a-table.component.css',
  standalone:true,
  imports:[FormsModule,CommonModule,HttpClientModule ]

})
export class ATableComponent implements OnInit {
  @Input() datos: (EntidadModel | InterfazModel)[] = [];
  columnas: string[] = [];
  entidades:EntidadModel[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {

    this.apiService.getOptions().subscribe(
      (entidades: EntidadModelImpl[]) => {
        console.log({entidades});
       entidades.map((entidad)=>  {
           this.entidades.push(entidad);
           this.columnas = Object.keys(entidad);
          });
          const indice = this.columnas.indexOf('interfaces');
          if (indice !== -1) {
            this.columnas.splice(indice, 1);
          }
          console.log(this.columnas);
      },
      error => {
        console.error('Error al obtener las entidades:', error);
      }
    );
  }









}
