import { Component } from '@angular/core';
import { TopboxComponent } from '../../components/topbox/topbox.component';
import { ASearchComponent } from '../../components/a-search/a-search.component';
import { CONST_CONTENT_INTERFAZ, CONST_NAME_INTERFAZ } from '../../shared/constants';

@Component({
  selector: 'app-interfaz',
  templateUrl: './interfaz.component.html',
  styleUrl: './interfaz.component.css',
  standalone:true,
  imports:[TopboxComponent,ASearchComponent]

})
export class InterfazComponent {
  CONST_NAME: string =CONST_NAME_INTERFAZ;
  CONST_CONTENT: string =CONST_CONTENT_INTERFAZ;
}
