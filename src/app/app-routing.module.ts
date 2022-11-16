import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'signin',
    loadChildren: () => import('./templates/signin/signin.module').then( m => m.SigninPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./templates/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'changepassword',
    loadChildren: () => import('./templates/changepassword/changepassword.module').then( m => m.ChangepasswordPageModule)
  },
  {
    path: 'resendpasswordemail',
    loadChildren: () => import('./templates/resendpasswordemail/resendpasswordemail.module').then( m => m.ResendpasswordemailPageModule)
  },
  {
    path: 'profile', canActivate:[AuthGuard],
    loadChildren: () => import('./templates/profile/profile.module').then( m => m.ProfilePageModule)
  },  {
    path: 'profile',
    loadChildren: () => import('./dashboard/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./dashboard/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
