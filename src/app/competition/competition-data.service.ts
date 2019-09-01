import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CompetitionDataService {

  constructor(
    private http:HttpClient,
  ) { }

  competition_categories: any[];

  getCategories(){
    return this.http.get('https://api2.moodi.org/events/');
  }
}
