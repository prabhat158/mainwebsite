import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompetitionDataService } from '../../competition-data.service';
import { HttpClient } from '@angular/common/http';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-comp-prev-winner',
  templateUrl: './comp-prev-winner.component.html',
  styleUrls: ['./comp-prev-winner.component.css']
})
export class CompPrevWinnerComponent implements OnInit {

  competitions_categories: any[];
  current_competition_category: string;
  current_event: string;
  router: any;
  
  constructor(
    private route: ActivatedRoute,
    private http:HttpClient,
    private dataService: CompetitionDataService
  ) { }

  getCategories(){
  
    if(this.dataService.getCompidetail()==undefined){
      this.http.get('https://api2.moodi.org/events').subscribe(
        data=> {
        
        this.competitions_categories =data['Competitions'];
        this.dataService.setCompidetail(data['Competitions']);
  
        },
    );}else{
      
      this.competitions_categories =this.dataService.getCompidetail();
    } 
  }  

  ngOnInit() {
    this.getCategories();
    this.route.parent.params.subscribe(
      params => {
        this.current_competition_category = params.compiName,
        this.current_event = params.eventName 
      }
    );
    this.router.events.subscribe((evt: any) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
  });
  }

}