import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-third-faq',
  templateUrl: './third-faq.component.html',
  styleUrls: ['./third-faq.component.css']
})
export class ThirdFaqComponent implements OnInit {
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
