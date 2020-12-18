import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { LogoutComponent } from './user/logout/logout.component';
import { OrderOverviewComponent } from './overviews/order-overview/order-overview.component';
import { BatchOverviewComponent } from './overviews/batch-overview/batch-overview.component';
import { RolOverviewComponent } from './overviews/rol-overview/rol-overview.component';
import { RolDataComponent } from './overviews/rol-data/rol-data.component';
import { ControleLoggenComponent } from './controles/controle-loggen/controle-loggen.component';
import { HomeComponent } from './home/home.component';
import { VrijgifteComponent } from './controles/vrijgifte/vrijgifte.component';

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
    component: OrderOverviewComponent,
  },
  {
    path: 'batchOverview/:orderId',
    component: BatchOverviewComponent,
  },
  {
    path: 'rolOverview/:batchId',
    component: RolOverviewComponent,
  },
  {
    path: 'rolData/:rolId',
    component: RolDataComponent,
  },
  {
    path: 'controleLoggen',
    component: ControleLoggenComponent,
  },
  {
    path: 'vrijgifte',
    component: VrijgifteComponent,
  },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
