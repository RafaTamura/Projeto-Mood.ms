import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioComponentComponent } from './components/usuario-component/usuario-component.component';
import { MusicaComponent } from './components/musica/musica.component';
import { MoodComponent } from './components/mood/mood.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { InicioComponent } from './components/inicio/inicio.component';

const routes: Routes = [
  {path: 'musicas', component: MusicaComponent},
  {path: 'usuarios', component: UsuarioComponentComponent},
  {path: 'mood', component: MoodComponent},
  {path: 'sobre', component: SobreComponent},
  {path: '', component: InicioComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
