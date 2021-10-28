import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ComponentsModule } from "./components/components.module";
import { HomeComponent } from './pages/home/home.component';
import { RecipeComponent } from './pages/recipe/recipe.component';
import { AboutComponent } from './pages/about/about.component';
import { TermsComponent } from './pages/terms/terms.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RecipeComponent,
    AboutComponent,
    TermsComponent
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
