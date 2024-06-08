import { Routes } from '@angular/router';
import { DashboardComponent } from './module/dashboard/dashboard.component';
import { AuthGuard } from './core/guards/auth/auth.guard';
import { LoginComponent } from './module/login/login.component';


export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    //canActivate: [ AuthGuard ]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    //canActivate: [ AuthGuard ]
  },
];

