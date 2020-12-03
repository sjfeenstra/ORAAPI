import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './user/login/login.component';
import { LogoutComponent } from './user/logout/logout.component';
import { OrderOverviewComponent } from './overviews/order-overview/order-overview.component';
import { BatchOverviewComponent } from './overviews/batch-overview/batch-overview.component';
import { RolOverviewComponent } from './overviews/rol-overview/rol-overview.component';
import { RolDataComponent } from './overviews/rol-data/rol-data.component';
import { ControleLoggenComponent } from './controles/controle-loggen/controle-loggen.component';
import { HomeComponent } from './home/home.component';
import { VrijgifteComponent } from './controles/vrijgifte/vrijgifte.component';

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
