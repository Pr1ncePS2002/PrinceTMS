import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar.component';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';

export const routes: Routes = [
    {
        path: '',
        component: NavbarComponent,
        children: [
        {
            path:'',
            loadChildren:() => import('../../pages/pages.module').then(m => m.PageModule)
        }
          
        ],
      },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NavbarRoutingModule {}
