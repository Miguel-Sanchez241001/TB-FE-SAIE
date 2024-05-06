import { Component, OnInit } from '@angular/core';
import { TopboxComponent } from '../../components/topbox/topbox.component';
import { CONST_CONTENT_ENTIDAD,CONST_NAME_ENTIDAD } from "../../shared/constants";
import { ASearchComponent } from '../../components/a-search/a-search.component';
import { HttpClientModule } from '@angular/common/http';
import { ATableComponent } from '../../components/a-table/a-table.component';
import { ApiService } from '../../services/api.service';
import { EntidadModel, EntidadModelImpl } from '../../models/model';
 @Component({
  selector: 'app-entidades',
  templateUrl: './entidades.component.html',
  styleUrl: './entidades.component.css',
  standalone: true,
imports:[TopboxComponent,
  ASearchComponent,
  HttpClientModule,
  ATableComponent]
})
export class EntidadesComponent  implements OnInit  {
CONST_NAME: string =CONST_NAME_ENTIDAD;
CONST_CONTENT: string =CONST_CONTENT_ENTIDAD;

columnas: string[] = [];
entidades:EntidadModel[] = [];


constructor(private apiService: ApiService) {}

   ngOnInit(): void {
    this.apiService.getOptions().subscribe(
      (entidades: EntidadModelImpl[]) => {

        entidades.map((entidad)=>  {
           this.entidades.push(entidad);
           this.columnas = Object.keys(entidad);
          });
          const indice = this.columnas.indexOf('interfaces');
          if (indice !== -1) {
            this.columnas.splice(indice, 1);
          }
       },
      error => {
        console.error('Error al obtener las entidades:', error);
      }
    );
    }



}
