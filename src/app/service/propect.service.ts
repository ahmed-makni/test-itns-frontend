import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Propect} from '../model/Propect';

@Injectable({
  providedIn: 'root'
})
export class PropectService {

  constructor(private http:HttpClient) { }

  getlistEmploye(url){
    return this.http.get<Propect[]>(url);
  }
}
