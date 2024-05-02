import { Component } from '@angular/core';
import { TopboxComponent } from '../../components/topbox/topbox.component';
import { CONST_CONTENT_ENTIDAD,CONST_NAME_ENTIDAD } from "../../shared/constants";
import { ASearchComponent } from '../../components/a-search/a-search.component';
import { HttpClientModule } from '@angular/common/http';
import { ATableComponent } from '../../components/a-table/a-table.component';
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
export class EntidadesComponent {
CONST_NAME: string =CONST_NAME_ENTIDAD;
CONST_CONTENT: string =CONST_CONTENT_ENTIDAD;
}
