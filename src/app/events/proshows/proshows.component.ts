import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventdataService } from '../eventdata.service';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-proshows',
  templateUrl: './proshows.component.html',
  styleUrls: ['./proshows.component.css']
})
export class ProshowsComponent implements OnInit {
  proshows_shows: any;

  constructor(
    private route: ActivatedRoute,
    private dataService: EventdataService,
    private http:HttpClient,
  ) { }

  getCategories(){

    if(this.dataService.getProshowdetail()==undefined){
    this.http.get('https://api2.moodi.org/events').subscribe(
      data=> {
      
      this.proshows_shows = data['Proshows'];
      this.dataService.setProshowdetail(data['Proshows']);

      },
  );}else{
    
    this.proshows_shows =this.dataService.getProshowdetail();
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
