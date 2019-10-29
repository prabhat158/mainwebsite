import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventdataService } from '../eventdata.service';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-wne',
  templateUrl: './wne.component.html',
  styleUrls: ['./wne.component.css']
})
export class WneComponent implements OnInit {
  wne: any;
  clickedButton;

  constructor(
    private route: ActivatedRoute,
    private dataService: EventdataService,
    private http:HttpClient,
  ) { }

  getCategories(){

    if(this.dataService.getWnedetail()==undefined){
    this.http.get('https://api2.moodi.org/events').subscribe(
      data=> {
      
        this.wne = data['Workshops'];
        this.clickedButton=this.wne[0].name;
      this.dataService.setWnedetail(data['Workshops']);

      },
  );}else{
    
    this.wne =this.dataService.getWnedetail();
    this.clickedButton=this.wne[0].name;
  }
          // console.log(this.pronites_nites);
  }  

  onClick(button){
    console.log(button);
    this.clickedButton = button;
  }

  ngOnInit() {
    this.getCategories();
    this.route.params.subscribe(
      params => {
        // this.current_pronites_nite = params.pronites
      }
    );
  }

}
