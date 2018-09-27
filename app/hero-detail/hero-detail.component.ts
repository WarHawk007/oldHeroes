import { Component, OnInit } from '@angular/core';
import {HeroesdataService} from '../heroesdata.service';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {Hero} from '../hero';
import { FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import {validate} from 'codelyzer/walkerFactory/walkerFn';
import swal from 'sweetalert';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  hero$: Hero;
  hero: Hero;
  hname: string;
  himgsrc: string;
  hdescription: string;
  id: number;
  json: Object;

  updateHeroForm = this.fb.group({
    name: ['', Validators.required],
    imgsrc: ['', Validators.required],
    description: ['', Validators.required]
  });
  constructor(private herodata: HeroesdataService , private route: ActivatedRoute, private fb: FormBuilder) {
    this.route.params.subscribe(params => this.id = params.id);
  }

  ngOnInit() {
    this.herodata.getHero(this.id).subscribe(data => {
      this.hero$ = data[0];
      this.updateHeroForm.get('name').setValue(this.hero$.name);
      this.updateHeroForm.get('imgsrc').setValue(this.hero$.imgsrc);
      this.updateHeroForm.get('description').setValue(this.hero$.description);
    });
  }
  updatehero() {
    this.hname = this.updateHeroForm.get('name').value;
    this.himgsrc = this.updateHeroForm.get('imgsrc').value;
    this.hdescription = this.updateHeroForm.get('description').value;
    this.hero = new Hero(this.hname, this.himgsrc, this.hdescription);
    this.hero.id = this.hero$.id;
    console.log(this.hero);
    this.herodata.updateHero(this.hero).subscribe(data => {
      this.json = JSON.stringify(data);
    if (this.json.hasOwnProperty('errors')) {
      swal('Error!', this.json, 'error');
    } else {
        swal('Updated!', 'Your Hero has been Updated.', 'success');
      }
    });
  }
}
