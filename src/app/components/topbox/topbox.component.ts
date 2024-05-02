import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-topbox',
  templateUrl: './topbox.component.html',
  styleUrl: './topbox.component.css',
  standalone: true,

})
export class TopboxComponent {

  @Input() topName:string = "Cabecera";
  @Input() topContent:string = "Cuerpo";
}
