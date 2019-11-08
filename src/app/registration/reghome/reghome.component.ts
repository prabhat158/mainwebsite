import {Component, NgZone, OnInit} from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
;

import { DataService } from '../data.service';

declare const gapi: any;
@Component({
  selector: 'app-reghome',
  templateUrl: './reghome.component.html',
  styleUrls: ['./reghome.component.css']
})
export class ReghomeComponent implements OnInit {

  


  constructor(

    private transfereService:DataService,
    private _ngZone: NgZone,
    private http: HttpClient,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }


  somefunction(data){
    // this.transfereService.setData(data);
    console.log("done")
  }

  public gID: number;
  public name: string;
  public imageURL: string;
  public email: string;
  private url: string = "http://localhost:8000/user";


  public auth2:any;
  public googleInit(){
    gapi.load('auth2',()=>{
      this.auth2 = gapi.auth2.init({
        client_id: '511498944970-b2g59f8sj5h2c20vhkim5tkrpcn9sckc.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        scope: 'profile email'
      });
      this.attachSignin(document.getElementById('button'));
    });
  }

  public attachSignin(element){
    this.auth2.attachClickHandler(element, {},
      (googleUser)=> {
        let profile=googleUser.getBasicProfile();
        this.gID=profile.getId();

        this.transfereService.setJdataTemp(JSON.stringify({
          'name':profile.getName(),
          'email':profile.getEmail(),
          'uid':profile.getId()
        }) );
        this.name= profile.getName();
        this.imageURL=profile.getImageUrl();
        this.email=profile.getEmail();
        this.onClick();
      });
  }

  onClick(){
    this.http.get(this.url+'/'+this.gID)
      .subscribe(
        // data => this.router.navigate(['profile'],{relativeTo: this.activatedRoute.parent}),
        data => {
          // console.log(data),
          this.transfereService.setJdata(
            JSON.stringify({
            'name':data['name'],
            'email':data['email'],
            'uid':data['google_id'],
            'mobile':data['mobile_number'],
            'mi_no':data['mi_number']
  
          }))
          this._ngZone.run(() => this.router.navigate(['profile'],{relativeTo: this.activatedRoute.parent}));
        },
        error => {
          this._ngZone.run(() => this.router.navigate(['form'], {relativeTo: this.activatedRoute.parent}));
                  }
        )
  }

  ngAfterViewInit(){
    this.googleInit();
  }

  status=true;

  profile(){

    this.router.navigateByUrl('/register/profile');
  }

  ngOnInit() {
    if(localStorage.getItem("jdata")===null){
      this.status=false;
    }
  }

}
