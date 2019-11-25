import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompetitionDataService } from '../competition-data.service';
import { Router, NavigationEnd } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-competition-list',
  templateUrl: './competition-list.component.html',
  styleUrls: ['./competition-list.component.css']
})
export class CompetitionListComponent implements OnInit {

  competitions_categories: any;
  current_competition_category: string;
  router: any;

  constructor(
    private route: ActivatedRoute,
    private dataService: CompetitionDataService,
    private http:HttpClient,
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
          // console.log(this.competitions_categories)
  }  
  
  ngOnInit(){
    this.getCategories();
    this.route.params.subscribe(
      params => {
        this.current_competition_category = params.compiName
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
