import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Router, NavigationEnd } from '@angular/router';



@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css']
})
export class FaqsComponent implements OnInit {
  public lottieConfig: Object;
  private anim: any;
  animationSpeed: number = 1;
  router: any;

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

      this.router.events.subscribe((evt: any) => {
        if (!(evt instanceof NavigationEnd)) {
            return;
        }
        window.scrollTo(0, 0)
    });
  };
  
  
}
