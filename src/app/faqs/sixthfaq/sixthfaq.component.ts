import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-sixthfaq',
  templateUrl: './sixthfaq.component.html',
  styleUrls: ['./sixthfaq.component.css']
})
export class SixthfaqComponent implements OnInit {
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
