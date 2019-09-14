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
  
  preload (list: string[], callback) {
    callback();
  }

  public ngOnInit() 
  {
    // const list = ["../../assets/Asset 8Selected.png"];
    // const jsonobj = {"../../assets/Asset 8Selected.png" : false};
    // const fun = (e, iter) => {

    // }
    // this.preload([], () => {
    //   http.get(kjdsfhlsd () => {
        
    //   })
    // })
    // const k = new Image();
    // k.src = iter;
    // k.addEventListener('load', (e) => {
    //   console.log("image loaded", e)
    // })
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
