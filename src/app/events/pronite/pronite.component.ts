import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventdataService } from '../eventdata.service';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pronite',
  templateUrl: './pronite.component.html',
  styleUrls: ['./pronite.component.css']
})
export class ProniteComponent implements OnInit {
  pronites_nites: any;
  current_pronites_nite: any;

  constructor(
    private route: ActivatedRoute,
    private dataService: EventdataService,
    private http:HttpClient,
  ) { }

  getCategories(){

    if(this.dataService.getEventdetail()==undefined){
    this.http.get('https://api2.moodi.org/events').subscribe(
      data=> {
      
      this.pronites_nites = data['Concerts'];
      this.dataService.setEventdetail(data['Concerts']);

      },
  );}else{
    
    this.pronites_nites =this.dataService.getEventdetail();
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
