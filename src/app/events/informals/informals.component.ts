import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventdataService } from '../eventdata.service';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-informals',
  templateUrl: './informals.component.html',
  styleUrls: ['./informals.component.css']
})
export class InformalsComponent implements OnInit {
  informals: any;
  clickedButton;

  constructor(
    private route: ActivatedRoute,
    private dataService: EventdataService,
    private http:HttpClient,
  ) { }

  getCategories(){

    if(this.dataService.getInformaldetail()==undefined){
    this.http.get('https://api2.moodi.org/events').subscribe(
      data=> {
      
      this.informals = data['Informals'];
      this.clickedButton=this.informals[0].name;
      this.dataService.setInformaldetail(data['Informals']);

      },
  );}else{
    
    this.informals =this.dataService.getInformaldetail();
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
