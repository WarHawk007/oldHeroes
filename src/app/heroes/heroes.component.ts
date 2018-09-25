import { Component, OnInit } from '@angular/core';
import {HeroesdataService} from '../heroesdata.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes$: Object;
  constructor(private herodata: HeroesdataService) {}

  ngOnInit() {
    this.herodata.getHeroes().subscribe(data => this.heroes$ = data);
  }

}
