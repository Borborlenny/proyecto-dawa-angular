import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empresa } from '../models/Empresa.model';

@Injectable({
  providedIn: 'root'
})
export class EmpresaJsonService {
  private jsonUrl: string = "http://localhost:3000/empresa"
  constructor(private http: HttpClient) { }
  obtenerEmpresas(): Observable<Empresa[]>{
    return this.http.get<Empresa[]>(this.jsonUrl)
  }
}
