import { Component } from '@angular/core';
import * as $ from 'jquery';
import { TimelineLite, Back, Power1, SlowMo } from 'gsap'
import { TimelineMax, Power4, TweenMax, Power0, Power2 } from 'gsap';

import { ElementRef, Renderer } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public ngOnInit()
  {
  }

  onClick(){
    
  }
  openNav() {
    document.getElementById("mySidenav").style.width = "300px";
}

/* Set the width of the side navigation to 0 */
 closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
}
