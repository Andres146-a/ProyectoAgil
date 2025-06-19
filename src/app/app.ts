import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'; 
@Component({
  selector: 'app-root',
   standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'

})
export class App {
  sidebarCollapsed = false;
    toggleSidebar() {
      this.sidebarCollapsed = !this.sidebarCollapsed;
    }
  selectedOption: string = 'todos';
  protected title = 'TiendaLibro';
  opciones = ['todos', 'registrar', 'actualizar', 'eliminar'];
}
