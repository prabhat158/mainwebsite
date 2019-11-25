import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-second-faq',
  templateUrl: './second-faq.component.html',
  styleUrls: ['./second-faq.component.css']
})
export class SecondFaqComponent implements OnInit {
  router: any;

  constructor() { }

  ngOnInit() {
    this.router.events.subscribe((evt: any) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
  });
  }

}
