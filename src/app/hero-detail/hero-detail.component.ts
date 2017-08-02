import { Component, OnInit, Output, EventEmitter, Directive, HostListener, HostBinding } from '@angular/core';
import { Hero } from './../models/hero'
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
 // @Output() markDeleted = new EventEmitter<Hero>();
  fontColor: string;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {

    this.route.paramMap
      .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
      .subscribe(hero => this.hero = hero);
  }

  saveChanges(): void {

  //  if (!this.hero.validate()) {
  //     alert('Every skill must me non-negative number and their sum must be 100')
  //     return;
  //   } 

    this.heroService.update(this.hero)
      .then(() => this.goBack());
  }

  // delete(): void {
  //   this.markDeleted.emit(this.hero);
  // }

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
