
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompetitionDataService } from '../../competition-data.service';
import { HttpClient } from '@angular/common/http';
// import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import { DataService } from '../../../registration/data.service';
@Component({
  selector: 'app-comp-reg',
  templateUrl: './comp-reg.component.html',
  styleUrls: ['./comp-reg.component.css']
})
export class CompRegComponent implements OnInit {

  // teamno;
  is_leader_names
  my_team_names
  leader_names
  cdRef
  eventid
  UID
  status=false

  competitions_categories: any[];
  current_competition_category: string;
  current_event: string;
  
  constructor(
    private route: ActivatedRoute,
    private http:HttpClient,
    private dataService: CompetitionDataService,    
    private profile:DataService,
    private router: Router
  ) { }

  getCategories(){

    if(this.dataService.getCompidetail()==undefined){
      this.http.get('https://api2.moodi.org/events').subscribe(
        data=> {
        
        this.competitions_categories =data['Competitions'];
        this.dataService.setCompidetail(data['Competitions']);
  
        },
    );}else{
      
      this.competitions_categories =this.dataService.getCompidetail();
      console.log("max  ")
     console.log(this.dataService.getCompidetail()) 
    }
   }  

    public my_team(eventid){
      console.log('43534534534')
      // this.cdRef.detectChanges();
      this.http.get('https://api2.moodi.org/team/is_leader/'+this.UID+"?event="+eventid+"&multicity=NO")
      .subscribe(
        data => {
          this.is_leader_names=data['members']
          this.leader_names=data
          console.log("this.is_leader_nams")
          // this.cdRef.detectChanges();
          },
          error => {
            console.log("this.is_leader_names")
      this.my_team_names= null
      this.is_leader_names=null;
      this.leader_names=null;
          }
      )
        
  
      this.http.get('https://api2.moodi.org/team/my_team/'+JSON.parse(this.profile.getJdata()).uid+"?event="+eventid+"&multicity=no")
      .subscribe(
        data1 => {
          this.my_team_names=data1['members']
          this.leader_names=data1
          // this.cdRef.detectChanges();
          },
          error => console.log(this.is_leader_names)
      )

      
      console.log(this.leader_names)
      console.log('fdhgdfhdfh')
  
    }


    public create_team(eventid) {
    
      console.log("ok")
      this.http.post('https://api2.moodi.org/team/create_team/'+this.UID, {
        mobile_number :1222222233,
        multicity:"NO",
        eventMI_id: eventid,
       })
        .subscribe(result =>
        {
        this.my_team(eventid)
        },
        error => {
        alert(error["error"]["detail"])
        },
        () => {
        }
      );
    }
    public add_member(number, eventid){
      console.log(number)
      this.http.post('https://api2.moodi.org/team/add_member/'+this.UID, {
        eventMI_id: eventid,
        multicity:'NO',
        member_number: number
       })
        .subscribe(result =>{
        this.my_team(eventid)},
        data => {
          console.log(data)
          alert(JSON.stringify(data["error"]))
          },
          () => {
          }
        ); 
    }

    public join_team(number, eventid){
      this.http.post('https://api2.moodi.org/team/join_team/'+this.UID, {
        eventMI_id: eventid,
        multicity:'NO',
        mi_number: number
       })
        .subscribe(result =>{
        this.my_team(eventid)},
        data => {
          console.log(data)
          alert(JSON.stringify(data["error"]))
          },
          () => {
          }
        ); 
    }

    public exit_team(number, eventid){
      console.log(number)
      this.http.post('https://api2.moodi.org/team/exit_team/'+this.UID, {
        eventMI_id: eventid,
        multicity:'NO',
        number: number
       })
        .subscribe(result =>{
        this.my_team(eventid)
        },
        error => {
          console.log(error)
          alert(error)
          },
          () => {
          }
        );
      }


  geteventid(){
    for (let cat of this.competitions_categories){
      if(cat.name==this.current_competition_category){
        for(let event of cat.events){
          if(event.name==this.current_event){
            this.eventid=event.id;
            console.log(this.eventid)
          }
        }
      }
    }}


  sendTo(){
    this.router.navigateByUrl('/register');
  }

  ngOnInit() {
    this.getCategories();
    this.route.parent.params.subscribe(
      params => {
        this.current_competition_category = params.compiName,
        this.current_event = params.eventName 
      }
    );
    this.geteventid();
    if(localStorage.getItem("jdata")===null){
      this.status=false;
    }else{
      this.status=true;
      this.UID=JSON.parse(this.profile.getJdata()).uid;
      this.my_team(this.eventid);
      console.log("yooo")
    }
  }

}