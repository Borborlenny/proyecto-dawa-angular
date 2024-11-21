import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CrudUsuarioComponent } from './components/crud-usuario/crud-usuario.component';
import { CrudRutaComponent } from './components/crud-ruta/crud-ruta.component';
import { CrudMaterialComponent } from "./components/crud-material/crud-material.component";
import { CrudHogarComponent } from "./components/crud-hogar/crud-hogar.component";
import { CrudEmpresaComponent } from "./components/crud-empresa/crud-empresa.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CrudUsuarioComponent, CrudRutaComponent, CrudMaterialComponent, CrudHogarComponent, CrudEmpresaComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto-dawa';
}
