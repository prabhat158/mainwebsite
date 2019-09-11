import { Component,NgZone, OnInit} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';



const httpOptions={
  headers: new HttpHeaders({
    'Content-Type':'application/json',
    'Authorization':'my-auth-token',

  })
}
@Component({
  selector: 'app-regform',
  templateUrl: './regform.component.html',
  styleUrls: ['./regform.component.css']
})
export class RegformComponent implements OnInit {

  people = ['Indian Institute of Tech Bombay', 'Indian Institute of Tech Delhi', 'Indian Institute of Tech Kanpur','IIIT Pune','Bits Pilani'];
  genders = ['Male', 'Female', 'Other'];
  years = ['First', 'Second', 'Third', 'Fourth', 'Fifth'];
  showDropDownClg = false;
  showDropDownGen = false;
  showDropDownCys = false;

  chosengender
  college
  name = JSON.parse(this.transfereService.getJdataTemp()).name
  email= JSON.parse(this.transfereService.getJdataTemp()).email
  uid=JSON.parse(this.transfereService.getJdataTemp()).uid
  mobile
  city
  pin
  year

  constructor(

    private _ngZone: NgZone,
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    private transfereService:DataService,
    private router:Router) {
    }

  form = new FormGroup({});

  ngOnInit() {
    if(this.uid==undefined){
      this._ngZone.run(() => this.router.navigate(['/'],{relativeTo: this.activatedRoute.parent}));
    }else{
      // console.log(this.uid)
    }
  }
  toggleDropDownClg() {
    this.showDropDownClg = !this.showDropDownClg;
  }
  closeDropDownClg() {
    this.showDropDownClg = false;
  }
  selectValueClg(value) {

    console.log("value")
    console.log(value)
    this.college = value;
    this.showDropDownClg = false;
  }

  toggleDropDownGen() {
    this.showDropDownGen = !this.showDropDownGen;
  }
  closeDropDownGen() {
    this.showDropDownGen = false;
  }

  toggleDropDownCys() {
    this.showDropDownCys = !this.showDropDownCys;
  }
  closeDropDownCys() {
    this.showDropDownCys = false;
  }
  selectValueCys(value) {

    console.log("value")
    console.log(value)
    this.year = value;
    this.showDropDownCys = false;
  }

  printAll() {

  }
  selectValueGen(value) {
    this.chosengender = value;
    this.showDropDownGen = false;
  }

  createuser(){
    // console.log(this.chosengender + this.city +this.college+this.mobile)
    this.http.post("https://api2.moodi.org/user/create",
    {
      name: this.name,
      mobile_number: this.mobile,
      year_of_study: this.year,
      gender:this.chosengender,
      zip_code:this.pin,
      google_id:this.uid,
      email:this.email,
      present_city:this.city,
      present_college:this.college,
      postal_address:'NotMulticity',
      dob:"111",
      cr_referral_code:'',
      status:"reg"
    },httpOptions)
    .subscribe(result =>
      {
        this.transfereService.setJdata(
          JSON.stringify({
          'name':this.name,
          'email':this.email,
          'uid':this.uid,
          'mobile':this.mobile

        }))
        this._ngZone.run(() => this.router.navigate(['profile'],{relativeTo: this.activatedRoute.parent}));
        // console.log(result)
      },
      data => {
        console.log(data)
      alert(JSON.stringify(data["error"]))
      },
      () => {
      })}
}
