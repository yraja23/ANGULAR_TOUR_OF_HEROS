// import { Component } from '@angular/core';
// import {
//   NgFor,
//   NgIf,
//   UpperCasePipe
// } from '@angular/common';
// import {FormsModule} from  '@angular/forms';

// import { Hero } from '../hero';
// // import {HEROES} from '../mock-heroes';
// import { HeroService } from '../hero.service'; //insted of using {HEROES}
// import { HeroDetailComponent } from "../hero-detail/hero-detail.component";
// import { HEROES } from '../mock-heroes';
// @Component({
//     standalone: true,
//     selector: 'app-heroes',
//     templateUrl: './heroes.component.html',
//     styleUrls: ['./heroes.component.css'],
//     imports: [
//         FormsModule,
//         NgIf,
//         NgFor,
//         UpperCasePipe,
//         HeroDetailComponent
//     ]
// })
//   // hero = 'Mitchell';
//   // hero1 = 'Rachin';
//   // hero2 = 'Du plessis';
//   // hero3 = 'Conway';
//   // hero4 = 'ABD';
//   // hero: Hero = {
//   //   id : 1,
//   //   name : 'Mitchell'
//   // };
//   // heroes = HEROES;
  
// export class HeroesComponent {
// onSelect(_t5: Hero) {
// throw new Error('Method not implemented.');
// }
//   heroes = HEROES;
// selectedHero: any;
//   // selectedHero?: Hero;

//   // onSelect(hero: Hero): void {
//   //   this.selectedHero = hero;
//   // }
// }




import {Component, OnInit} from '@angular/core';
import {
  NgIf,
  NgFor,
  UpperCasePipe,
} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {Hero} from '../hero';
import {HEROES} from '../mock-heroes';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
@Component({
  standalone: true,
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  imports: [
    FormsModule,
    NgIf,
    NgFor,
    UpperCasePipe,
  ],
})

export class HeroesComponent implements OnInit {
  heroes :Hero[]=[];
  string: any;
  selectedHero?:Hero;
  constructor(private heroService: HeroService, private messageService: MessageService){}
    ngOnInit(): void{
      this.getHeroes();
    }

    getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(x =>{
          console.log(x);
          this.heroes = x;
        })
         
  }
  onSelect(hero: Hero): void {
    this.messageService.add(`you selected Hero with id ${hero.id} and name ${hero.name} `)
    console.log(hero);
    this.selectedHero = hero;
  }
}
