import { Component, OnInit } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {slideInAnimation} from './animations';
import * as $ from 'jquery';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [
    slideInAnimation
    // animation triggers go here
  ]
})
export class ContactComponent implements OnInit {
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
      $(".se-pre-con").fadeOut("slow");});
      console.log("here")
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
