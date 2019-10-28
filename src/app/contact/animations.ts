import {animate, animateChild, group, query, style, transition, trigger} from '@angular/animations';

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('* <=> Competitions', [
      style({position: 'relative'}),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          right: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({right: '-100%'})
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('1000ms ease-out', style({opacity: '0'}))
        ]),
        query(':enter', [
          animate('1000ms ease-out', style({right: '0%'}))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
    transition('* <=> Creatives', [
      style({position: 'relative'}),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          right: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({right: '-100%'})
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('500ms ease-out', style({opacity: '0'}))
        ]),
        query(':enter', [
          animate('1000ms ease-out', style({right: '0%'}))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
    transition('* <=> Food', [
      style({position: 'relative'}),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          right: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({right: '-100%'})
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('1000ms ease-out', style({opacity: '0'}))
        ]),
        query(':enter', [
          animate('1000ms ease-out', style({right: '0%'}))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
    transition('* <=> Horizons', [
      style({position: 'relative'}),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          right: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({right: '-100%'})
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('1000ms ease-out', style({opacity: '0'}))
        ]),
        query(':enter', [
          animate('1000ms ease-out', style({right: '0%'}))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
    transition('* <=> Informals', [
      style({position: 'relative'}),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          right: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({right: '-100%'})
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('1000ms ease-out', style({opacity: '0'}))
        ]),
        query(':enter', [
          animate('1000ms ease-out', style({right: '0%'}))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
    transition('* <=> Marketing', [
      style({position: 'relative'}),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          right: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({right: '-100%'})
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('1000ms ease-out', style({opacity: '0'}))
        ]),
        query(':enter', [
          animate('1000ms ease-out', style({right: '0%'}))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
    transition('* <=> Media', [
      style({position: 'relative'}),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          right: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({right: '-100%'})
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('1000ms ease-out', style({opacity: '0'}))
        ]),
        query(':enter', [
          animate('1000ms ease-out', style({right: '0%'}))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
    transition('* <=> Pronites', [
      style({position: 'relative'}),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          right: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({right: '-100%'})
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('1000ms ease-out', style({opacity: '0'}))
        ]),
        query(':enter', [
          animate('1000ms ease-out', style({right: '0%'}))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
    transition('* <=> Logistics', [
      style({position: 'relative'}),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          right: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({right: '-100%'})
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('1000ms ease-out', style({opacity: '0'}))
        ]),
        query(':enter', [
          animate('1000ms ease-out', style({right: '0%'}))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
    transition('* <=> Hospitality', [
      style({position: 'relative'}),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          right: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({right: '-100%'})
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('1000ms ease-out', style({opacity: '0'}))
        ]),
        query(':enter', [
          animate('1000ms ease-out', style({right: '0%'}))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
    transition('* <=> Oc', [
      style({position: 'relative'}),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          right: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({right: '-100%'})
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('1000ms ease-out', style({opacity: '0'}))
        ]),
        query(':enter', [
          animate('1000ms ease-out', style({right: '0%'}))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
  ]);

