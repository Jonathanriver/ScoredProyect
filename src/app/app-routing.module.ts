import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

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
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'gestion-proyectos',
    loadChildren: () => import('./gestion-proyectos/gestion-proyectos.module').then( m => m.GestionProyectosPageModule)
  },
  {
    path: 'gestion-usuarios',
    loadChildren: () => import('./gestion-usuarios/gestion-usuarios.module').then( m => m.GestionUsuariosPageModule)
  },
  {
    path: 'gestion-score',
    loadChildren: () => import('./gestion-score/gestion-score.module').then( m => m.GestionScorePageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'detail-proyect',
    loadChildren: () => import('./detail-proyect/detail-proyect.module').then( m => m.DetailProyectPageModule)
  },
  {
    path: 'register-proyect',
    loadChildren: () => import('./register-proyect/register-proyect.module').then( m => m.RegisterProyectPageModule)
  },
  {
    path: 'aprobed-proyect',
    loadChildren: () => import('./aprobed-proyect/aprobed-proyect.module').then( m => m.AprobedProyectPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
