import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';
import {NgxQRCodeModule} from 'ngx-qrcode2';

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

    qrCodeValue=JSON.parse(this.profile.getJdata()).mi_no;

    name=JSON.parse(this.profile.getJdata()).name;
    email=JSON.parse(this.profile.getJdata()).email
    mobile=JSON.parse(this.profile.getJdata()).mobile

    mino=JSON.parse(this.profile.getJdata()).mi_no

    logout(){
    localStorage.clear();
    this.router.navigateByUrl('/register');
    }
  ngOnInit() {
  }

}
