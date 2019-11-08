import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventdataService } from '../eventdata.service';

import { HttpClient } from '@angular/common/http';

import { DomSanitizer} from '@angular/platform-browser';
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
    protected sanitizer: DomSanitizer,
    ) { }
    public transform(type){
      return this.sanitizer.bypassSecurityTrustHtml(type);
    }

  getCategories(){

    if(this.dataService.getPremidetail()==undefined){
    this.http.get('http://localhost:8000/events').subscribe(
      data=> {
      
      this.premi = data['Arts and Ideas'];
      this.clickedButton=this.premi[0].name;
      this.dataService.setPremidetail(data['Arts and Ideas']);

      },
  );}else{
    
    this.premi =this.dataService.getPremidetail();
    this.clickedButton=this.premi[0].name;
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
