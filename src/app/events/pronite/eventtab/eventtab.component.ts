import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventdataService } from '../../eventdata.service';
import { HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Router } from '@angular/router';

@Component({
  selector: 'app-eventtab',
  templateUrl: './eventtab.component.html',
  styleUrls: ['./eventtab.component.css']
})
export class EventtabComponent implements OnInit {
  pronites_nites: any[];
  clickedButton: string;
  current_pronites_nite: string;
  current_nite: string;
  pronites_lineup: any;


  constructor(
    private route: ActivatedRoute,
    private http:HttpClient,
    private dataService: EventdataService,
    private router: Router
  ) { }

  getCategories(){
  

    if(this.dataService.getEventdetail()==undefined){
    this.http.get('https://api2.moodi.org/events').subscribe(
      data=> {
      
      this.pronites_nites =data['Concerts'];
      this.dataService.setEventdetail(data['Concerts']);
      // this.pronites_lineup = this.pronites_nites.entries;

      },
  );}else{
    
    this.pronites_nites =this.dataService.getEventdetail();
    // this.pronites_lineup = this.dataService.getEventdetail();
  }

  console.log(this.pronites_nites);
  
}  

  onClick(button){
    this.clickedButton = button;
  }

  ngOnInit() {
    this.clickedButton='desc';
    this.getCategories();
    this.route.params.subscribe(
      params => {
        this.current_pronites_nite = params.pronites,
        this.current_nite = params.nitename
      }
    );
  }

}
