import { CadastraComponent } from './cadastra/cadastra.component';
import { AlteraComponent } from './altera/altera.component';
import { ListaComponent } from './lista/lista.component';
import { DeletaComponent } from './deleta/deleta.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'cadastra', component: CadastraComponent},
  { path: 'lista', component: ListaComponent},
  { path: 'deleta', component: DeletaComponent},
  { path: 'altera', component: AlteraComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
