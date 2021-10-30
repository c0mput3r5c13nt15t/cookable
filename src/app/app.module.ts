import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ComponentsModule } from "./components/components.module";
import { AboutComponent } from './pages/about/about.component';
import { TermsComponent } from './pages/terms/terms.component';
import { BurgerComponent } from './pages/burger/burger.component';
import { PizzaComponent } from './pages/pizza/pizza.component';
import { PastaComponent } from './pages/pasta/pasta.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    TermsComponent,
    BurgerComponent,
    PizzaComponent,
    PastaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
