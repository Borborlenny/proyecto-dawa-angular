import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListarHogaresComponent } from './components/listar-hogares/listar-hogares.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListarHogaresComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto-dawa';
}
