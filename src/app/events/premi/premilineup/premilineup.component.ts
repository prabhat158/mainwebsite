import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventdataService } from '../../eventdata.service';
import { HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Router } from '@angular/router';

@Component({
  selector: 'app-premilineup',
  templateUrl: './premilineup.component.html',
  styleUrls: ['./premilineup.component.css']
})
export class PremilineupComponent implements OnInit {
  premi: any;
  clickedButton: any;
  current_premi: any;
  current_event: any;

  constructor(
    private route: ActivatedRoute,
    private http:HttpClient,
    private dataService: EventdataService,
    private router: Router
  ) { }

  getCategories(){
  

    if(this.dataService.getPremidetail()==undefined){
    this.http.get('https://api2.moodi.org/events').subscribe(
      data=> {
      
    this.premi =data['Arts and Ideas'];
      this.dataService.setPremidetail(data['Arts and Ideas']);
      // this.pronites_lineup = this.pronites_nites.entries;

      },
  );}else{
    
    this.premi =this.dataService.getPremidetail();
    // this.pronites_lineup = this.dataService.getEventdetail();
  }

  console.log(this.premi);
  
}  

  onClick(button){
    this.clickedButton = button;
  }

  ngOnInit() {
    this.clickedButton='desc';
    this.getCategories();
    this.route.params.subscribe(
      params => {
        this.current_premi = params.premi,
        this.current_event = params.eventname
      }
    );
  }

}
