import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventdataService } from '../eventdata.service';

import { DataService } from '../../registration/data.service';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-wne',
  templateUrl: './wne.component.html',
  styleUrls: ['./wne.component.css']
})
export class WneComponent implements OnInit {
  wne: any;
  clickedButton;
  status=false;

  name=JSON.parse(this.profile.getJdata()).name;
  email=JSON.parse(this.profile.getJdata()).email
  mobile=JSON.parse(this.profile.getJdata()).mobile
  mino=JSON.parse(this.profile.getJdata()).mi_no

  constructor(
    private profile:DataService,
    private route: ActivatedRoute,
    private router: Router,
    private dataService: EventdataService,
    private http:HttpClient,   
    protected sanitizer: DomSanitizer,
    ) { }
    public transform(type){
      return this.sanitizer.bypassSecurityTrustHtml(type);
    }

    sendTo(){
      this.router.navigateByUrl('/register');
    }

  getCategories(){

    if(this.dataService.getWnedetail()==undefined){
    this.http.get('https://api2.moodi.org/events').subscribe(
      data=> {
      
        this.wne = data['Workshops'];
        this.clickedButton=this.wne[0].name;
        this.wnedata(this.wne[0].events[0].id)
      this.dataService.setWnedetail(data['Workshops']);

      },
  );}else{
    
    this.wne =this.dataService.getWnedetail();
    this.clickedButton=this.wne[0].name;
    this.wnedata(this.wne[0].events[0].id)
  }
          // console.log(this.pronites_nites);
  }

  wnereg(event){
    this.http.post('https://api2.moodi.org/workshopreg', {
      name:this.name,
      mi_number:this.mino,
      mobile_number:this.mobile,
      event:event,
      email:this.email
     })
      .subscribe(result =>{
        this.wnedata(event)
      },
      data => {
        console.log(data)
        alert(JSON.stringify(data["error"]))
        },
        () => {
        }
      ); 
  }
  regdata
  wnedata(id){
    this.http.get('https://api2.moodi.org/workshopdetail/'+this.mino+'/id/'+id)
      .subscribe(result =>{
          this.regdata=result
          console.log(result)
      },
      data => {
        this.regdata=undefined
        },
        () => {
        }
      ); 
  }
  eventid;
  onClick(button, id){
    this.eventid=id;
    this.wnedata(id)
    this.clickedButton = button;
  }

  ngOnInit() {
    this.getCategories();
    this.route.params.subscribe(
      params => {
        // this.current_pronites_nite = params.pronites
      }
    );

    if(localStorage.getItem("jdata")===null){
      this.status=false;
    }else{
      this.status=true;
    }
  }

}
