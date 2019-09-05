import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private router:Router,
    // private companyServiceService:CompanyServiceService,
  ) { }

  private name;
  private email;
  private uid;

  setName(data){
    this.name = data;
  }
  setEmail(data){
    this.email = data;
  }
  setUid(data){
    this.uid = data;
  }

  getName(){
    let temp = this.name;
    return temp;
  }
  getEmail(){
    let temp = this.email;
    return temp;
  }
  getUid(){
    let temp = this.uid;
    return temp;
  }
  

  clearName(){
    this.name = undefined;
  }

}