import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from './../../models/hero'

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero : Hero;
  @Output() markDeleted = new EventEmitter<Hero>();
  constructor() { }

  ngOnInit() {
  }
  saveChanges(p: string, st : string, sp : string) {

    let power = +p;
    let stamina = +st;
    let speed = +sp;

    if (isNaN(power) || power < 0 || isNaN(speed) || speed < 0 || isNaN(stamina) || stamina < 0){
      alert('Every skill must be non-negative number');
      return;
    }
    else if ((power + speed + stamina) != 100){
      alert('Sum of skills must me 100');
      return;
    }

    this.hero.power = power;
    this.hero.speed = speed;
    this.hero.stamina = stamina;
  }
  delete(){
    this.markDeleted.emit(this.hero);
  }
}
