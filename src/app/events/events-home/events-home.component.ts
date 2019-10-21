import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EventdataService } from '../eventdata.service';

@Component({
  selector: 'app-events-home',
  templateUrl: './events-home.component.html',
  styleUrls: ['./events-home.component.css']
})
export class EventsHomeComponent implements OnInit {

  constructor(
    private dataService: EventdataService,
    private http:HttpClient,
  ) { }

  ngOnInit() {

    this.http.get('https://api2.moodi.org/events').subscribe(
      data=> {

      this.dataService.setEventdetail(data['Concerts']);
      this.dataService.setProshowdetail(data['Proshows']);
      this.dataService.setWnedetail(data['Workshops']);
      this.dataService.setInformaldetail(data['Informals']);
      this.dataService.setPremidetail(data['Arts and Ideas']);
      // console.log(data['Concerts']);

      },
    );
  }

}
