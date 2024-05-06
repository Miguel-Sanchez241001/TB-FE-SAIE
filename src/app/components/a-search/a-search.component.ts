import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { ResponseModel,EntidadModelImpl } from '../../models/model';
@Component({
  selector: 'app-a-search',
  templateUrl: './a-search.component.html',
  styleUrl: './a-search.component.css',
  standalone:true,
  imports:[FormsModule,CommonModule,HttpClientModule ]
})
export class ASearchComponent implements OnInit {
  options: { id?: number, nombre: string }[] = [];

 opcionSeleccionada: string = ''; // Valor por defecto

  constructor(private apiService: ApiService) {}


  ngOnInit(): void {


    this.apiService.getOptions().subscribe(
      (entidades: EntidadModelImpl[]) => {
        console.log({entidades});
        this.options = entidades.map(entidad => ({ id: entidad.id, nombre: entidad.nombre }));
      },
      error => {
        console.error('Error al obtener las entidades:', error);
      }
    );
  }
}
