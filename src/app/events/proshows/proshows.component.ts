import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventdataService } from '../eventdata.service';

import { HttpClient } from '@angular/common/http';
import { DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-proshows',
  templateUrl: './proshows.component.html',
  styleUrls: ['./proshows.component.css']
})
export class ProshowsComponent implements OnInit {
  proshows_shows;
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

    if(this.dataService.getProshowdetail()==undefined){
    this.http.get('https://api2.moodi.org/events').subscribe(
      data=> {
      
      this.proshows_shows = data['Proshows'];
      this.clickedButton=this.proshows_shows[0].name;
      this.dataService.setProshowdetail(data['Proshows']);

      for(var i = 0; i < this.proshows_shows.length; i++){
        for(var j = 0; j < this.proshows_shows[i].events.length; j++){
          if(document.getElementById(this.proshows_shows[i].events[j].name+'image') != undefined){
            document.getElementById(this.proshows_shows[i].events[j].name+'image').style.display = "block";
          }
        }
      }


      },
  );}else{
    
    this.proshows_shows =this.dataService.getProshowdetail();
    this.clickedButton=this.proshows_shows[0].name;
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
