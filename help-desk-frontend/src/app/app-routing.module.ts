import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './security/login/login.component';
import { AuthGuard } from './security/service/auth-guard';
import { AffectationComponent } from './components/affectation/affectation.component';
import { SoftwareComponent } from './components/software/software.component';
import { HardwareComponent } from './components/hardware/hardware.component';
import { PartenerComponent } from './components/partener/partener.component';
import { ProfessionComponent } from './components/profession/profession.component';
import { NotFoundComponent } from './templates/exception/not-found/not-found.component';
import { NotAccessComponent } from './templates/exception/not-access/not-access.component';
import { MarqueComponent } from './components/marque/marque.component';
import { MenuComponent } from './components/menu/menu.component';
import { OccuredErrorComponent } from './templates/exception/occured-error/occured-error.component';
import { StockComponent } from './components/stock/stock.component';
import { HomeComponent } from './components/home/home.component';
import { MarqueFamilyComponent } from './components/marque-family/marque-family.component';
import { ApplicationComponent } from './components/application/application.component';

const routes: Routes = [
  {
    path: 'affectations', component: AffectationComponent, canActivate: [AuthGuard],
    data: { title: 'Affectation' }
  },
  {
    path: 'softwares', component: SoftwareComponent, canActivate: [AuthGuard],
    data: { title: 'Logiciel' }
  },
  {
    path: 'hardwares', component: HardwareComponent, canActivate: [AuthGuard],
    data: { title: 'Materiel' }
  },
  {
    path: 'parteners', component: PartenerComponent, canActivate: [AuthGuard],
    data: { title: 'Personnel' }
  },
  {
    path: 'marques', component: MarqueComponent, canActivate: [AuthGuard],
    data: { title: 'Marque' }
  },
  {
    path: 'marques_family', component: MarqueFamilyComponent, canActivate: [AuthGuard],
    data: { title: 'Famille de marque' }
  },
  {
    path: 'menus', component: MenuComponent, canActivate: [AuthGuard]
    ,
    data: { title: 'Menu' }
  },
  {
    path: 'professions', component: ProfessionComponent, canActivate: [AuthGuard],
    data: { title: 'Profession' }
  },
  {
    path: 'stocks', component: StockComponent, canActivate: [AuthGuard],
    data: { title: 'Stock' }
  },
  {
    path: '404', component: NotFoundComponent, canActivate: [AuthGuard],
    data: { title: 'Not found' }
  },
  {
    path: '500', component: OccuredErrorComponent, canActivate: [AuthGuard]
    ,
    data: { title: 'Current Error' }
  },
  {
    path: '403', component: NotAccessComponent, canActivate: [AuthGuard],
    data: { title: 'Not Access' }
  },
  {
    path: 'home', component: HomeComponent, canActivate: [AuthGuard]
    ,
    data: { title: 'Home' }
  },
  {
    path: 'configs', component: ApplicationComponent, canActivate: [AuthGuard]
    ,
    data: { title: 'Config' }
  },
  {
    path: 'login', component: LoginComponent,
    data: { title: 'Login' }
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
