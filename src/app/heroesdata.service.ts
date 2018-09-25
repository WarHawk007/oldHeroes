import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroesdataService {

  constructor(private httpclient: HttpClient) {}
  getHeroes() {
    return this.httpclient.get('http://localhost/heroapi/herodata.php');
  }
  getHero(heroid) {
    return this.httpclient.get('http://localhost/heroapi/herodata.php?id=' + heroid);
  }
}
