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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    OrderOverviewComponent,
    LogoutComponent,
    BatchOverviewComponent,
    RolOverviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
