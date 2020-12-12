import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';

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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatButtonModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatListModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatRadioModule,
    MatCheckboxModule
  ],
  exports:[MatInputModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
