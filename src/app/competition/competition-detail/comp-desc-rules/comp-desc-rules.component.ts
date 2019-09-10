import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompetitionDataService } from '../../competition-data.service';

@Component({
  selector: 'app-comp-desc-rules',
  templateUrl: './comp-desc-rules.component.html',
  styleUrls: ['./comp-desc-rules.component.css']
})
export class CompDescRulesComponent implements OnInit {

  

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