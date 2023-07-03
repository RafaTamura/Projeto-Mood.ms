import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioService } from './usuario.service';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsuarioComponentComponent } from './components/usuario-component/usuario-component.component';
import { MusicaComponent } from './components/musica/musica.component';
import { MoodComponent } from './components/mood/mood.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { InicioComponent } from './components/inicio/inicio.component';


@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponentComponent,
    MusicaComponent,
    MoodComponent,
    SobreComponent,
    InicioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [HttpClientModule, UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
