import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AuthComponent } from './auth/auth.component';
import { FormContactComponent } from './form-contact/form-contact.component';
import { HomeComponent } from './home/home.component';
import { InfosPremiumComponent } from './infos-premium/infos-premium.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

const routes: Routes = [

  {path: '', component: HomeComponent},
  {
    path: 'portfolio', component: PortfolioComponent
  },
  {
    path: 'contact', component: FormContactComponent
  },
  {
    path:'infos', component:InfosPremiumComponent, canActivate:[AuthGuard]
  },
  
  {
    path:'auth', component: AuthComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
