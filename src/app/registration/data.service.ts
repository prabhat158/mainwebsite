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


  setJdata(data){
    localStorage.setItem('jdata',data);
  }

  getJdata(){
    // let temp = this.uid;
    return localStorage.getItem('jdata')
  }

}