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
    var menuInner = $(".js-menu-inner"),
      menuTrigger = $(".js-menu-trigger"),
      menuInnerBackgroundItem = $(".js-menu-inner-background").find("i"),
      menuItem = $(".js-menu-items-list").find("li"),
      menuItemsShape = $(".js-menu-items-shape"),
      menuClose = $(".js-menu-close"),
      timeline = new TimelineMax({
        paused: true
      }),
      logoShape = $(".js-logo-shape"),
      logoShapePath =
        "M 189,80.37 C 243,66.12 307.3,87.28 350.9,124.1 389.3,156.6 417,211.2 418.1,263.4 419.1,305.7 401.8,355.6 368.5,379.1 298.8,428 179.2,446.4 117.6,386.3 65.4,335.3 78.55,230.3 105.5,160.5 119.7,123.6 152.6,89.85 189,80.37 Z",
      _self,
      linksWrapper = $(".js-menu-items-wrapper"),
      linksItems = $(".js-menu-items-list").find("li"),
      activeItem = $(".js-menu-item.is-active"),
      activeItemPosition = activeItem.position().top,
      menuItemsShapePath = $(".js-items-shape-path"),
      topOffset = 8;
  
    timeline
      .to(
        menuInner,
        1,
        {
          autoAlpha: 1,
          ease: Power4.easeOut
        },
        "start"
      )
      .fromTo(
        menuInnerBackgroundItem,
        0.25,
        {
          x: "-100%",
          autoAlpha: 0
        },
        {
          x: "0%",
          autoAlpha: 1,
          ease: Power1.easeOut
        },
        "start"
      )
      .staggerFromTo(
        menuItem,
        0.4,
        {
          x: -30,
          autoAlpha: 0
        },
        {
          x: 0,
          autoAlpha: 1,
          delay: 0.35,
          ease: Back.easeOut.config(1)
        },
        0.15,
        "start"
      )
      .fromTo(
        menuItemsShape,
        0.25,
        {
          scale: 0.7,
          autoAlpha: 0
        },
        {
          scale: 1,
          autoAlpha: 1,
          delay: 0.95,
          ease: Back.easeOut.config(1.7)
        },
        "start"
      )
      .fromTo(
        menuClose,
        0.2,
        {
          x: -10,
          autoAlpha: 0
        },
        {
          x: 0,
          autoAlpha: 1,
          delay: 1,
          ease: Power1.easeOut
        },
        "start"
      );
  
    function _logoShapeAnimation() {
      TweenMax.to(logoShape, 3, {
        attr: { d: logoShapePath },
        repeat: -1,
        yoyo: true,
        ease: Power0.easeNone
      });
    }
  
    function _hoverAnimation() {
      TweenMax.set(menuItemsShape, {
        y: activeItemPosition + topOffset
      });
  
      linksItems.on({
        mouseenter: function() {
          _self = $(this);
          var selfParent = _self.closest(linksWrapper),
            targetCircle = selfParent.find(menuItemsShape),
            circlePosition = _self.position().top;
  
          TweenMax.to(targetCircle, 0.4, {
            y: circlePosition + topOffset,
            ease: Power2.easeOut
          });
  
          TweenMax.to(menuItemsShapePath, 1, { morphSVG: this.dataset.morph });
        }
      });
  
      linksWrapper.on({
        mouseleave: function() {
          _self = $(this);
          var selfParent = _self.closest(linksWrapper),
            activeLink = selfParent.find(activeItem),
            targetCircle = selfParent.find(menuItemsShape),
            activeLinkPosition = activeLink.position().top;
  
          TweenMax.to(targetCircle, 0.4, {
            y: activeLinkPosition + topOffset,
            ease: Power2.easeOut
          });
  
          TweenMax.to(menuItemsShapePath, 1, { morphSVG: menuItemsShapePath });
        }
      });
    }
  
    menuTrigger.on("click", function() {
      timeline.play();
    });
  
    menuClose.on("click", function() {
      timeline.timeScale(1.25);
      timeline.reverse();
    });
  
    _logoShapeAnimation();
    _hoverAnimation();
  }

  onClick(){
    
  }
}
