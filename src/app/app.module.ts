import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroComponent } from './hero.component';
import { DashboardComponent } from './dashboard/dashboard.component'
import { HeroService } from './hero.service'
import { AppRoutingModule } from './app-routing.module'

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule],
    
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
