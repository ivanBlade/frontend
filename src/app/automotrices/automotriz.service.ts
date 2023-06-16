import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Automotriz } from './automotriz';



@Injectable({
  providedIn: 'root'
})
export class AutomotrizService {

  private url:string="http://localhost:8096/automotriz";
  constructor( private http:HttpClient ) { }


  getAll():Observable<Automotriz[]>{
    return this.http.get<Automotriz[]>(this.url);
  }

  create(automotriz:Automotriz):Observable<Automotriz>{
    return this.http.post<Automotriz>(this.url, automotriz);
  }

  get(id:number):Observable<Automotriz>{
    return this.http.get<Automotriz>(this.url+'/'+id);
  }

  update(automotriz:Automotriz):Observable<Automotriz>{
    return this.http.put<Automotriz>(this.url, automotriz);
  }

  delete(id:number):Observable<Automotriz>{
    return this.http.delete<Automotriz>(this.url+'/'+id);
  }
}
