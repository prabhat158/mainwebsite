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
    if(this.compidetail==undefined){
      
     return this.getCategories()
    }
    else
    return this.compidetail;
  }
  
  getCategories(){
    
    this.http.get('https://api2.moodi.org/events').subscribe(
      data=> {
      this.compidetail=data['Competitions'];
      
    // console.log(this.compidetail)

    console.log(this.compidetail)
    console.log("ok");
    
        return this.compidetail

      },
  );
  }
}
