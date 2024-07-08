import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { TopboxComponent } from './topbox/topbox.component';
import { ASearchComponent } from './a-search/a-search.component';
import { ATableComponent } from './a-table/a-table.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,


  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
  HeaderComponent,
    SidebarComponent,
    FooterComponent,
  ]
})
export class ComponentsModule { }
