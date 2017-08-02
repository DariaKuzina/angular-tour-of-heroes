import { Component, OnInit, Output, EventEmitter, Directive, HostListener, HostBinding } from '@angular/core';
import { Hero } from './../../models/hero'
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from './../hero.service'
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;
  @Output() markDeleted = new EventEmitter<Hero>();
  fontColor: string;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() : void {

    this.route.paramMap
      .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
      .subscribe(hero => this.hero = hero);
  }
  saveChanges(p: string, st: string, sp: string) : void {

    let power = +p;
    let stamina = +st;
    let speed = +sp;

    if (isNaN(power) || power < 0 || isNaN(speed) || speed < 0 || isNaN(stamina) || stamina < 0) {
      alert('Every skill must be non-negative number');
      return;
    }
    else if ((power + speed + stamina) != 100) {
      alert('Sum of skills must me 100');
      return;
    }

    this.hero.power = power;
    this.hero.speed = speed;
    this.hero.stamina = stamina;
  }
  delete() : void {
    this.markDeleted.emit(this.hero);
  }
  goBack(): void {
    this.location.back();
  }

  // @HostBinding("style.color") get getFontColour() {

  //   return this.fontColor;
  // }
  // @HostListener("mouseenter") onMouseEnter() {
  //   this.fontColor = "#0651cc";
  // }
  // @HostListener("mouseleave") onMouseLeave() {
  //   this.fontColor = "black";
  // }
}
