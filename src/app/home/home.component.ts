import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit() {
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.src = 'assets/js/animations.js';
    // this.elementRef.nativeElement.appendChild(s);
    document.body.appendChild(s);
  }

}
