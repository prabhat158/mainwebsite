import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-first-faq',
  templateUrl: './first-faq.component.html',
  styleUrls: ['./first-faq.component.css']
})
export class FirstFaqComponent implements OnInit {
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
