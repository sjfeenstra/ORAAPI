import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { OrderOverviewComponent } from './order-overview/order-overview.component';
import { BatchOverviewComponent } from './batch-overview/batch-overview.component';
import { RolOverviewComponent } from './rol-overview/rol-overview.component';

const routes: Routes = [
  {
  path: 'login',
  component: LoginComponent,
},
{
  path: 'logout',
  component: LogoutComponent,
},
{
  path: 'orderOverview',
  component: OrderOverviewComponent
},
{
  path: 'batchOverview',
  component: BatchOverviewComponent
},
{
  path: 'rolOverview',
  component: RolOverviewComponent
},
{ path: '',   redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
