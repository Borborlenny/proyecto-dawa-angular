import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hogar } from '../models/Hogar';

@Injectable({
  providedIn: 'root'
})
export class JsondataService {

  private jsonUrl: string = "../json/datos.json";

  constructor(private http: HttpClient) { }

  getHogares(): Observable<Hogar[]>{
    return this.http.get<Hogar[]>(this.jsonUrl);
  }
}
