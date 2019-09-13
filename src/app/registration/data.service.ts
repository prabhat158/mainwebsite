import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {Gmaild} from './gmaild'
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private router:Router,
  ) { }
    
  setcollegedata(data){
    localStorage.setItem('college',data);
  }

  setJdata(data){
    localStorage.setItem('jdata',data);
  }

  getcollegedata(){
    // let temp = this.uid;
    return localStorage.getItem('college')
  }

  getJdata(){
    // let temp = this.uid;
    return localStorage.getItem('jdata')
  }

  setJdataTemp(data){
    localStorage.setItem('jdatatemp',data);
  }

  getJdataTemp(){
    // let temp = this.uid;
    return localStorage.getItem('jdatatemp')
  }

}