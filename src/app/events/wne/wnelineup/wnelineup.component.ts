import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventdataService } from '../../eventdata.service';
import { HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Router } from '@angular/router';

@Component({
  selector: 'app-wnelineup',
  templateUrl: './wnelineup.component.html',
  styleUrls: ['./wnelineup.component.css']
})
export class WnelineupComponent implements OnInit {
  wne: any;
  clickedButton: any;
  current_wne: any;
  current_exhi: any;

  constructor(
    private route: ActivatedRoute,
    private http:HttpClient,
    private dataService: EventdataService,
    private router: Router
  ) { }

  getCategories(){
  

    if(this.dataService.getWnedetail()==undefined){
    this.http.get('https://api2.moodi.org/events').subscribe(
      data=> {
      
    this.wne =data['Workshops'];
      this.dataService.setWnedetail(data['Workshops']);
      // this.pronites_lineup = this.pronites_nites.entries;

      },
  );}else{
    
    this.wne =this.dataService.getWnedetail();
    // this.pronites_lineup = this.dataService.getEventdetail();
  }

  console.log(this.wne);
  
}  

  onClick(button){
    this.clickedButton = button;
  }

  ngOnInit() {
    this.clickedButton='desc';
    this.getCategories();
    this.route.params.subscribe(
      params => {
        this.current_wne = params.wne,
        this.current_exhi = params.exhiname
      }
    );
  }

}
