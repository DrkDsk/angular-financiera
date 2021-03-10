import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router} from '@angular/router'

@Component({
  selector: 'app-my-navigation',
  templateUrl: './my-navigation.component.html',
  styleUrls: ['./my-navigation.component.css']
})
export class MyNavigationComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private router: Router, private breakpointObserver: BreakpointObserver) {}

  addClient(){
    this.router.navigate(['add'])
  }

}
