import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Router, NavigationStart } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { UsersComponent } from '../admin/users/users.component';
import { FleetComponent } from '../fleet/fleet.component';
import { LocationsComponent } from '../fleet/locations/locations.component';
import { ReportsComponent } from '../fleet/reports/reports.component';
import { TechSupportComponent } from '../tech-support/tech-support.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'admin',
    children: [
      {
        path: '',
        redirectTo: 'users',
        pathMatch: 'full'
      },
      {
        path: 'users',
        component: UsersComponent
      }
    ]
  },
  {
    path: 'fleet',
    children: [
      {
        path: 'locations',
        component: LocationsComponent
      },
      {
        path: 'reports',
        component: ReportsComponent
      }
    ]
  },
  {
    path: 'tech-support',
    component: TechSupportComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule {
  constructor(router:Router) {
    router.events.subscribe(event => {
      if(event instanceof NavigationStart) {
        if (event.url !== '/' && event.url !== '/login' && localStorage.getItem('token') === null) {
          router.navigateByUrl('/');
        }
      }
    });
  }
}
