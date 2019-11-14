import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.css']
})
export class CompetitionComponent implements OnInit {
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
}
