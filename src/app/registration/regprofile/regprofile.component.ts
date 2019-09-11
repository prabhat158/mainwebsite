import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-regprofile',
  templateUrl: './regprofile.component.html',
  styleUrls: ['./regprofile.component.css']
})
export class RegprofileComponent implements OnInit {

  constructor(
    private profile:DataService,
    private router: Router
    ) { }

    name=JSON.parse(this.profile.getJdata()).name;
    email=JSON.parse(this.profile.getJdata()).email
    uid=JSON.parse(this.profile.getJdata()).uid

    logout(){
    localStorage.clear();
    this.router.navigateByUrl('/registration');
    }
  ngOnInit() {
  }

}
