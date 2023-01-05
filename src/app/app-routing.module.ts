import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavigationComponent } from './components/navigation/navigation.component';

import { BasketComponent } from './components/basket/basket.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { IconhographyComponent } from './components/iconhography/iconhography.component';
import { ColorsComponent } from './components/colors/colors.component';
import { TypographyComponent } from './components/typography/typography.component';
import { TypographyDarkComponent } from './components/typography-dark/typography-dark.component';

const routes: Routes = [
  { path: '', redirectTo: 'Login', pathMatch: 'full' },
  { path: 'Navigation', component: NavigationComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'Profile', component: ProfileComponent },
  { path: 'ProductList', component: ProductListComponent },
  { path: 'ProductDetail', component: ProductListComponent },
  { path: 'Basket', component: BasketComponent },
  { path: 'Iconhography', component: IconhographyComponent },
  { path: 'Colors', component: ColorsComponent },
  { path: 'Typography', component: TypographyComponent },
  { path: 'Typography Dark', component: TypographyDarkComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
