import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hogar } from '../models/Hogar.model';

@Injectable({
  providedIn: 'root'
})
export class HogarJsonService {
  private jsonUrl: string = "http://localhost:3000/hogar"
  constructor(private http: HttpClient) { }
  obtenerHogares():Observable<Hogar[]>{
    return this.http.get<Hogar[]>(this.jsonUrl)
  }
}
