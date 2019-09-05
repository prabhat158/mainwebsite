import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompetitionDataService } from '../../competition-data.service';

@Component({
  selector: 'app-comp-prev-winner',
  templateUrl: './comp-prev-winner.component.html',
  styleUrls: ['./comp-prev-winner.component.css']
})
export class CompPrevWinnerComponent implements OnInit {

  competitions_categories: any[];
  current_competition_category: string;
  current_event: string;
  
  constructor(
    private route: ActivatedRoute,
    private dataService: CompetitionDataService
  ) { }

  getCategories(){
    this.dataService.getCategories()
      .subscribe(
        data=> {  
          this.competitions_categories = data['Competitions'];
        }
    );
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