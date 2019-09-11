
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompetitionDataService } from '../../competition-data.service';

@Component({
  selector: 'app-comp-reg',
  templateUrl: './comp-reg.component.html',
  styleUrls: ['./comp-reg.component.css']
})
export class CompRegComponent implements OnInit {

  competitions_categories: any[];
  current_competition_category: string;
  current_event: string;
  
  constructor(
    private route: ActivatedRoute,
    private dataService: CompetitionDataService
  ) { }

  getCategories(){
   
    this.competitions_categories =this.dataService.getCompidetail();
  }  

  ngOnInit() {
    this.getCategories();
    this.route.parent.params.subscribe(
      params => {
        this.current_competition_category = params.compiName,
        this.current_event = params.eventName 
      }
    );
  }

}