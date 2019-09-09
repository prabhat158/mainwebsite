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

  private setLocalStorageGmaild(gamil: Gmaild[]): void {
    localStorage.setItem('todos', JSON.stringify({ gamil: gamil }));
  }

}