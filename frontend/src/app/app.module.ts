import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { OrderOverviewComponent } from './order-overview/order-overview.component';
import { LogoutComponent } from './logout/logout.component';
import { BatchOverviewComponent } from './batch-overview/batch-overview.component';
import { RolOverviewComponent } from './rol-overview/rol-overview.component';
import { RolDataComponent } from './rol-data/rol-data.component';
import { ControleLoggenComponent } from './controle-loggen/controle-loggen.component';
import { HomeComponent } from './home/home.component';
import { VrijgifteComponent } from './vrijgifte/vrijgifte.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    OrderOverviewComponent,
    LogoutComponent,
    BatchOverviewComponent,
    RolOverviewComponent,
    RolDataComponent,
    ControleLoggenComponent,
    HomeComponent,
    VrijgifteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
