import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventdataService } from '../../eventdata.service';
import { HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Router } from '@angular/router';

@Component({
  selector: 'app-proshowlineup',
  templateUrl: './proshowlineup.component.html',
  styleUrls: ['./proshowlineup.component.css']
})
export class ProshowlineupComponent implements OnInit {
  proshows_shows: any;
  clickedButton: any;
  current_proshows_show: any;
  current_show: any;

  constructor(
    private route: ActivatedRoute,
    private http:HttpClient,
    private dataService: EventdataService,
    private router: Router
  ) { }

  getCategories(){
  

    if(this.dataService.getProshowdetail()==undefined){
    this.http.get('https://api2.moodi.org/events').subscribe(
      data=> {
      
    this.proshows_shows =data['Proshows'];
      this.dataService.setProshowdetail(data['Proshows']);
      // this.pronites_lineup = this.pronites_nites.entries;

      },
  );}else{
    
    this.proshows_shows =this.dataService.getProshowdetail();
    // this.pronites_lineup = this.dataService.getEventdetail();
  }

  console.log(this.proshows_shows);
  
}  

  onClick(button){
    this.clickedButton = button;
  }

  ngOnInit() {
    this.clickedButton='desc';
    this.getCategories();
    this.route.params.subscribe(
      params => {
        this.current_proshows_show = params.proshows,
        this.current_show = params.showname
      }
    );
  }

}
