
import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompetitionDataService } from '../competition-data.service';
import { HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Router } from '@angular/router';

@Component({
  selector: 'app-competition-detail',
  templateUrl: './competition-detail.component.html',
  styleUrls: ['./competition-detail.component.css']
})
export class CompetitionDetailComponent implements OnInit {

  clickedButton:string;

  competitions_categories: any[];
  current_competition_category: string;
  current_event: string;
  
  constructor(
    private route: ActivatedRoute,
    private http:HttpClient,
    private dataService: CompetitionDataService,
    private router: Router
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

  onClick(button){
    this.clickedButton = button;
  }

  ngOnInit() {
    
    this.clickedButton='desc';
    this.getCategories();
    this.route.params.subscribe(
      params => {
        this.current_competition_category = params.compiName,
        this.current_event = params.eventName
      }
    );
  }
  @HostListener('window:popstate', ['$event'])
  onPopState(event) {
    // this.router.navigateByUrl('/registration');
  }
}