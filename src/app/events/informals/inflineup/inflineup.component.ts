import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventdataService } from '../../eventdata.service';
import { HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Router } from '@angular/router';

@Component({
  selector: 'app-inflineup',
  templateUrl: './inflineup.component.html',
  styleUrls: ['./inflineup.component.css']
})
export class InflineupComponent implements OnInit {
  informals: any;
  clickedButton: any;
  current_informals: any;
  current_inf: any;

  constructor(
    private route: ActivatedRoute,
    private http:HttpClient,
    private dataService: EventdataService,
    private router: Router
  ) { }

  getCategories(){
  

    if(this.dataService.getInformaldetail()==undefined){
    this.http.get('https://api2.moodi.org/events').subscribe(
      data=> {
      
    this.informals =data['Informals'];
      this.dataService.setInformaldetail(data['Informals']);
      // this.pronites_lineup = this.pronites_nites.entries;

      },
  );}else{
    
    this.informals =this.dataService.getInformaldetail();
    // this.pronites_lineup = this.dataService.getEventdetail();
  }

  console.log(this.informals);
  
}  

  onClick(button){
    this.clickedButton = button;
  } 

  

  ngOnInit() {
    // 
    this.getCategories();
    this.route.params.subscribe(
      params => {
        this.current_informals = params.informals,
        this.current_inf = params.infname
      }
    );
  }

}
