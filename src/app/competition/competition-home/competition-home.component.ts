import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { CompetitionDataService } from '../competition-data.service';

@Component({
  selector: 'app-competition-home',
  templateUrl: './competition-home.component.html',
  styleUrls: ['./competition-home.component.css']
})
export class CompetitionHomeComponent implements OnInit {

  constructor(
    private dataService: CompetitionDataService,
    private http:HttpClient,
    ) { }

  ngOnInit() {

    this.http.get('https://api2.moodi.org/events').subscribe(
      data=> {
      this.dataService.setCompidetail(data['Competitions']);

      },
  );

    // this.dataService.getCategories();


  }

}
