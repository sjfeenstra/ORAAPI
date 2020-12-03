import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { OrderOverviewComponent } from './order-overview/order-overview.component';
import { BatchOverviewComponent } from './batch-overview/batch-overview.component';
import { RolOverviewComponent } from './rol-overview/rol-overview.component';
import { RolDataComponent } from './rol-data/rol-data.component';
import { ControleLoggenComponent } from './controle-loggen/controle-loggen.component';
import { HomeComponent } from './home/home.component';
import { VrijgifteComponent } from './vrijgifte/vrijgifte.component';

const routes: Routes = [
{
  path: 'login',
  component: LoginComponent,
},
{
  path: 'home',
  component: HomeComponent,
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
{
  path: 'rolData',
  component: RolDataComponent
},
{
  path: 'controleLoggen',
  component: ControleLoggenComponent
},
{
  path: 'vrijgifte',
  component: VrijgifteComponent
},

{ path: '',   redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
