import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of} from 'rxjs';
import { MessageService } from './message.service';
// import { HeroService } from '../hero.service';
@Injectable({
  providedIn: 'root',
})
export class HeroService {

  constructor(private messageService : MessageService) {}
  getHeroes(): Observable<Hero[]> {
    // return HEROES;
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
} 

