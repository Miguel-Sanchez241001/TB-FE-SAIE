import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntidadesComponent } from './views/entidades/entidades.component';
import { InterfazComponent } from './views/interfaz/interfaz.component';


const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./views/views-routing.module').then(m => m.ViewsRoutingModule) },
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  { path: 'entidades', component: EntidadesComponent },
  { path: 'interfaces', component: InterfazComponent },



  // { path: 'mapas', component: MapasComponent },

  // Otras rutas
];
@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
