import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-fourth-faq',
  templateUrl: './fourth-faq.component.html',
  styleUrls: ['./fourth-faq.component.css']
})
export class FourthFaqComponent implements OnInit {
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
