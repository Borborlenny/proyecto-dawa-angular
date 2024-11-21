import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ruta } from '../models/Ruta.model';

@Injectable({
  providedIn: 'root'
})
export class RutaJsonService {
  private jsonUrl: string = "http://localhost:3000/ruta"
  constructor(private http: HttpClient) { }
  obtenerRutas():Observable<Ruta[]>{
      return this.http.get<Ruta[]>(this.jsonUrl)
  }
}
