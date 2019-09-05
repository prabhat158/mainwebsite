import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';

@Component({
  selector: 'app-regprofile',
  templateUrl: './regprofile.component.html',
  styleUrls: ['./regprofile.component.css']
})
export class RegprofileComponent implements OnInit {

  constructor(
    private profile:DataService,
    ) { }

    name=this.profile.getName()
    email=this.profile.getEmail()
    uid=this.profile.getUid()

  ngOnInit() {
  }

}
