import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutComponent} from "./pages/about/about.component";
import {TermsComponent} from "./pages/terms/terms.component";
import {BurgerComponent} from "./pages/burger/burger.component";
import {PastaComponent} from "./pages/pasta/pasta.component";
import {PizzaComponent} from "./pages/pizza/pizza.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/burger'
  },
  {
    path: 'burger',
    component: BurgerComponent
  },
  {
    path: 'pasta',
    component: PastaComponent
  },
  {
    path: 'pizza',
    component: PizzaComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'terms',
    component: TermsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
