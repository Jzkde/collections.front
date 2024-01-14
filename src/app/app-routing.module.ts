import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElementoComponent } from './elemento/elemento.component';
import { NuevoComponent } from './elemento/formularios/nuevo/nuevo.component';
import { UnoComponent } from './elemento/uno/uno.component';
import { EditarComponent } from './elemento/formularios/editar/editar.component';

const routes: Routes = [
  { path: '', component: ElementoComponent },
  { path: 'nuevo', component: NuevoComponent },
  { path: 'uno/:id', component: UnoComponent },
  { path: 'editar/:id', component: EditarComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
