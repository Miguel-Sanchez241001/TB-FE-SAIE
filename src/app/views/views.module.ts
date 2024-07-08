import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntidadesComponent } from './entidades/entidades.component';
 import { ComponentsModule } from '../components/components.module';
import { TopboxComponent } from '../components/topbox/topbox.component';
import { InterfazComponent } from './interfaz/interfaz.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [




    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: LoginComponent }])

  ],
  exports:[
     ]
})
export class ViewsModule { }
