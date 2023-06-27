import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioService } from './usuario.service';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import { UsuarioComponentComponent } from './components/usuario-component/usuario-component.component';
import { MusicaComponent } from './components/musica/musica.component';
import { MoodComponent } from './components/mood/mood.component';
import { SobreComponent } from './components/sobre/sobre.component';


@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponentComponent,
    MusicaComponent,
    MoodComponent,
    SobreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [HttpClientModule, UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
