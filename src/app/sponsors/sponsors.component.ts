import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'
@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.css']
})
export class SponsorsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(window).scroll(function(){
      // console.log('wwww');
      if ($(this).scrollTop() > 400) {
        $('.top-scroller').fadeIn();
      } else {
        $('.top-scroller').fadeOut();
      }
    });
    //Click event to scroll to top
    $('.top-scroller').click(function(){
      $('html, body').animate({scrollTop : 0},1000);
      return false;
    });
  }

}
