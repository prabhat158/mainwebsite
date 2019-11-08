import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventdataService } from '../eventdata.service';

import { HttpClient } from '@angular/common/http';
import { DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-pronite',
  templateUrl: './pronite.component.html',
  styleUrls: ['./pronite.component.css']
})
export class ProniteComponent implements OnInit {
  pronites_nites: any;
  current_pronites_nite: any;
  clickedButton;

  constructor(
    private route: ActivatedRoute,
    private dataService: EventdataService,
    private http:HttpClient,
    protected sanitizer: DomSanitizer,
  ) { }
  public transform(type){
		return this.sanitizer.bypassSecurityTrustHtml(type);
  }

  getCategories(){

    if(this.dataService.getEventdetail()==undefined){
    this.http.get('https://api2.moodi.org/events').subscribe(
      data=> {
      
        this.pronites_nites = data['Concerts'];
        this.clickedButton=this.pronites_nites[0].name;
      this.dataService.setEventdetail(data['Concerts']);

      },
  );}else{
    
    this.pronites_nites =this.dataService.getEventdetail();
    this.clickedButton=this.pronites_nites[0].name;
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
