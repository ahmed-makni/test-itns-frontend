import {Component, Input, OnInit} from '@angular/core';
import {SocietyService} from '../service/society.service';
import {Society} from '../model/society';
import {PropectService} from '../service/propect.service';
import {Propect} from '../model/Propect';

@Component({
  selector: 'app-society',
  templateUrl: './society.component.html',
  styleUrls: ['./society.component.css']
})
export class SocietyComponent implements OnInit {


  constructor( private societyService:SocietyService,private propectService:PropectService) { }

  nom;
  societies:Society[];
  society:Society;
    propects:Propect[];
    propect:Propect;
    config: any;
    conpteur=0;
    collection = { count: 60, data: [] };
    nomEmploye: string;

  ngOnInit() {
    this.getallSocieties();

  }
    getallEmploye(url) {
       this.propectService.getlistEmploye(url).subscribe(
           res => {
               this.propects = res;
               console.log(this.propects);
               this.propect=this.propects["_embedded"]["propects"][0];
               console.log(this.propects["_embedded"]["propects"][0]);
           }, error1 => {
               console.log(error1);
           }
           , () => {
               console.log('Complete');
           }
       )
    }


  searchOfSociety(name){
    this.societyService.getSociety(this.societyService._url,name).subscribe(
        res => {
           this.society= res;

          console.log(this.society);
          console.log(this.society._links.propects.href);
          let url=this.society._links.propects.href;
          this.conpteur=0;
            this.getallEmploye(url);
        }, error1 => {
          console.log(error1);
        }
        , () => {
          console.log('Complete');
        }
    )
  }
   getallSocieties() {
    this.societyService.getListSociety(this.societyService._url).subscribe(
        res => {
          this.societies = res;
          console.log(this.societies);
        }, error1 => {
          console.log(error1);
        }
        , () => {
          console.log('Complete');
        }
    )
  }

  OnclickSearch() {
    console.log(this.nom);
    this.searchOfSociety(this.nom);
  }

    pageChanged(event) {
      console.log(event);
        
    }

    onclickSuivant() {
      this.conpteur++;
      this.propect=this.propects["_embedded"]["propects"][this.conpteur];

    }
}
