import { Component, OnInit } from '@angular/core';

import { CompetitionDataService } from '../competition-data.service';

@Component({
  selector: 'app-competition-home',
  templateUrl: './competition-home.component.html',
  styleUrls: ['./competition-home.component.css']
})
export class CompetitionHomeComponent implements OnInit {

  constructor(
    private dataService: CompetitionDataService) { }

  ngOnInit() {

    this.dataService.getCategories();
  }

}
