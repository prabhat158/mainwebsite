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
      this.dataService.setWnedetail(data['Workshops']);

      },
  );}else{
    
    this.wne =this.dataService.getWnedetail();
  }
          // console.log(this.pronites_nites);
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
