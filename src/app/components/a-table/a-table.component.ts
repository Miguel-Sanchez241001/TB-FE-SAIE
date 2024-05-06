import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { EntidadModel, EntidadModelImpl, InterfazModel } from '../../models/model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {  HttpClientModule } from '@angular/common/http';
import { ApiService } from '../../services/api.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-a-table',
  templateUrl: './a-table.component.html',
  styleUrl: './a-table.component.css',
  standalone:true,
  imports:[FormsModule,CommonModule,HttpClientModule ]

})
export class ATableComponent implements OnInit {
  @Input() datos: (EntidadModelImpl )[] = [];
  @Input() columnas: string[] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  totalItems: number = 100; // Número total de elementos
  itemsPerPage: number = 10; // Número de elementos por página
  data: any[] = []; // Datos que se mostrarán en la página actual

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {

  }

  getDataForPage(event: PageEvent) {
    const startIndex = event.pageIndex * event.pageSize;
    const endIndex = startIndex + event.pageSize;
    // Lógica para obtener los datos de la página actual, por ejemplo, con un servicio
    // this.data = this.dataSource.slice(startIndex, endIndex);
  }

// Determina si los datos son de tipo EntidadModel
get esEntidad(): boolean {
  return this.datos.length > 0 && this.datos[0] instanceof EntidadModelImpl;
}






}
