import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { ViennaComponent } from './vienna/vienna.component';
import { MaroccoComponent } from './marocco/marocco.component';
import { SpainComponent } from './spain/spain.component';
import { GreeceComponent } from './greece/greece.component';
import { Navbar2Component } from './navbar2/navbar2.component';
import { FooterComponent } from './footer/footer.component';
import { ServiceComponent } from './service/service.component';
import { HeadlineComponent } from './headline/headline.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    ViennaComponent,
    MaroccoComponent,
    SpainComponent,
    GreeceComponent,
    Navbar2Component,
    FooterComponent,
    ServiceComponent,
    HeadlineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
