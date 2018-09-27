import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Hero} from './hero';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HeroesdataService {

  constructor(private httpclient: HttpClient) {}
  getHeroes(): Observable<Hero[]> {
    return this.httpclient.get<Hero[]>('http://localhost/heroapi/herodata.php');
  }
  addHero(hero: Hero): Observable<Hero> {
    console.log('Something Happened');
    return this.httpclient.post<Hero>('http://localhost/heroapi/inserthero.php', hero );
  }
  getHero(heroid): Observable<Hero> {
    return this.httpclient.get<Hero>('http://localhost/heroapi/herodata.php?id=' + heroid);
  }
  updateHero(hero: Hero): Observable<Hero> {
    return this.httpclient.put<Hero>('http://localhost/heroapi/updatehero.php', hero);
  }
  deleteHero(hero: Hero): Observable<Hero> {
    return this.httpclient.delete<Hero>('http://localhost/heroapi/deletehero.php?id=' + hero.id);
  }
}
