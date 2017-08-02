import { Component, OnInit, Output } from '@angular/core';
import { Hero } from './../models/hero'
import { HeroDetailComponent } from './hero-detail/hero-detail.component'
import { HeroService } from './hero.service'
import { Router } from '@angular/router'

@Component({
  selector: 'my-heroes',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(
    private heroService: HeroService,
    private router: Router
  ) { }


  ngOnInit(): void {
      this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  delete(hero: Hero): void {
    var index = this.heroes.indexOf(hero, 0);
    if (index > -1) {
      this.heroes.splice(index, 1);
    }
    this.selectedHero = null;
  }
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
