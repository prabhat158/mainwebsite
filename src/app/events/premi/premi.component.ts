import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventdataService } from '../eventdata.service';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-premi',
  templateUrl: './premi.component.html',
  styleUrls: ['./premi.component.css']
})
export class PremiComponent implements OnInit {
  premi: any;
  clickedButton;


  constructor(
    private route: ActivatedRoute,
    private dataService: EventdataService,
    private http:HttpClient,
  ) { }

  getCategories(){

    if(this.dataService.getPremidetail()==undefined){
    this.http.get('https://api2.moodi.org/events').subscribe(
      data=> {
      
      this.premi = data['Arts and Ideas'];
      this.clickedButton=this.premi[0].name;
      this.dataService.setPremidetail(data['Arts and Ideas']);

      },
  );}else{
    
    this.premi =this.dataService.getPremidetail();
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
