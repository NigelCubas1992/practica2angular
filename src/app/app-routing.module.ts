import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IslasComponent } from './islas/islas.component';
import { ListaComponent } from './lista/lista.component';
import { TresComponent } from './tres/tres.component';
import { ClimaComponent } from './clima/clima.component';

const routes: Routes = [
  {
    path:'islas',
    component:IslasComponent
  },
  {
    path:'lista',
    component:ListaComponent
  },
  {
    path:'tres',
    component:TresComponent
  },
  {
    path:'clima',
    component:ClimaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
