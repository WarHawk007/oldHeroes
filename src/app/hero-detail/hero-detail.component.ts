import { Component, OnInit } from '@angular/core';
import {HeroesdataService} from '../heroesdata.service';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  hero$: Object;
  constructor(private herodata: HeroesdataService , private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.hero$ = params.id);
  }

  ngOnInit() {
    this.herodata.getHero(this.hero$).subscribe(data => this.hero$ = data);
  }

}
