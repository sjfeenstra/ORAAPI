import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { LogoutComponent } from './user/logout/logout.component';
import { OrderOverviewComponent } from './overviews/order-overview/order-overview.component';
import { OrderDetailsComponent } from './overviews/order-details/order-details.component';
import { BatchDetailsComponent } from './overviews/batch-details/batch-details.component';
import { RollDetailsComponent } from './overviews/roll-details/roll-details.component';
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
    path: 'orderDetails/:order_NR',
    component: OrderDetailsComponent,
  },
  {
    path: 'batchDetails/:batch_NR',
    component: BatchDetailsComponent,
  },
  {
    path: 'rollDetails/:roll_NR',
    component: RollDetailsComponent,
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
