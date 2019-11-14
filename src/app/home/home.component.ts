import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  public lottieConfig: Object;
  private anim: any;
  animationSpeed: number = 1;

  constructor() { 
    this.lottieConfig = {
      path: 'assets/data.json',
      autoplay: true,
      loop: true
  };
  }
  handleAnimation(anim: any) {
    this.anim = anim;
}
  public ngOnInit()
  {
    $(window).on('load', function() { 
      $(".se-pre-con").fadeOut("slow");;});
  }

  ngAfterViewInit() {
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.src = 'assets/js/animations.js';
    // this.elementRef.nativeElement.appendChild(s);
    document.body.appendChild(s);
  }

}
