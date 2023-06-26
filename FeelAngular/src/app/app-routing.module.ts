import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioComponentComponent } from './components/usuario-component/usuario-component.component';
import { MusicaComponent } from './components/musica/musica.component';

const routes: Routes = [
  {path: 'musicas', component: MusicaComponent},
  {path: 'usuarios', component: UsuarioComponentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
