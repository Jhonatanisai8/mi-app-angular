import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';

@Component({
  imports: [RouterOutlet, Header],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  nombreUsuario: string = 'Jhoel';
  valorPlaceHolder: string = 'Ingresa aqui tu nombre';
  numero: number = 0;
  aumentarNumero() {
    this.numero++;
  }
  disminuirNumero() {
    this.numero--;
  }
}
