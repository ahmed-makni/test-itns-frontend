import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Society} from '../model/society';

@Injectable({
  providedIn: 'root'
})
export class SocietyService {

  public _url:string="http://localhost:8088";

  constructor(private http:HttpClient) { }

  getListSociety(url){
    return this.http.get<Society[]>(url+"/societies");
  }
  getSociety(url,nom){
    return this.http.get<Society>(url+"/societies/search/findByNom?nom="+nom)
  }

}
