import { Component, OnInit } from '@angular/core';
import {PropectService} from '../service/propect.service';
import {Propect} from '../model/Propect';

@Component({
  selector: 'app-propect',
  templateUrl: './propect.component.html',
  styleUrls: ['./propect.component.css']
})
export class PropectComponent implements OnInit {

  constructor(private propectService:PropectService,) { }

  propects:Propect[];
  propect:Propect;
  ngOnInit() {
  }

  getListEmploye(url){
    this.propectService.getlistEmploye(url).subscribe(
        res => {
          this.propects = res;
          console.log(this.propects);
        }, error1 => {
          console.log(error1);
        }
        , () => {
          console.log('Complete');
        }
    )
  }
}
