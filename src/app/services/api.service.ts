import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ResponseModel, EntidadModelImpl } from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:8080/entidad/';

  constructor(private http: HttpClient) {}

  getOptions(): Observable<EntidadModelImpl[]> {
    return this.http.get<ResponseModel>(this.apiUrl).pipe(

      map(response => {
        console.log('Respuesta de la API:', {response}); // Agrega un console.log() para imprimir la respuesta
        return response.data as EntidadModelImpl[];
      })
    );
  }
}
