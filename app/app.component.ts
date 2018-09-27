import { Component } from '@angular/core';
import { Router , NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myheroes';
  currentUrl: string;
  constructor(private router: Router) {
    router.events.subscribe((nav: NavigationEnd) => this.currentUrl = nav.url);

  }
}
