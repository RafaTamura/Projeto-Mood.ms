import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  constructor(private router: Router) {}

  irParaPerfil() {
    this.router.navigateByUrl('/usuarios');
  }
  irParaMusicas() {
    this.router.navigateByUrl('/musicas');

  }
  irParaMood() {
    this.router.navigateByUrl('/mood');

  }
}
