import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompetitionDataService {

  constructor(
    private http:HttpClient,
  ) { }

  compidetail;

  getCompidetail(){
    return this.compidetail;
  }
  
  setCompidetail(detail){
    this.compidetail=detail;
  }
}
