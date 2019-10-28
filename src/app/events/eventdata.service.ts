import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventdataService {

  constructor(
    private http:HttpClient,
  ) { }

  eventdetail;
  proshowdetail;
  informaldetail;
  premidetail;
  wnedetail;

  getEventdetail(){
    return this.eventdetail;
  }

  getProshowdetail(){
    return this.proshowdetail;
  }

  getInformaldetail(){
    return this.informaldetail;
  }

  getPremidetail(){
    return this.premidetail;
  }

  getWnedetail(){
    return this.wnedetail;
  }
  
  setEventdetail(evedetail){
    this.eventdetail=evedetail;
  }

  setProshowdetail(prodetail){
    this.proshowdetail=prodetail;
  }

  setInformaldetail(infdetail){
    this.informaldetail=infdetail;
  }

  setPremidetail(predetail){
    this.premidetail=predetail;
  }

  setWnedetail(wedetail){
    this.wnedetail=wedetail;
  }
}
