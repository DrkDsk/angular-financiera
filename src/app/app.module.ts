import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyNavigationComponent } from './Components/my-navigation/my-navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule} from '@angular/material/select'
import { MatMenuModule } from '@angular/material/menu';
import { HttpClientModule} from '@angular/common/http';
import { AddComponent } from './Components/client/add/add.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatInputModule} from '@angular/material/input';
import { EditComponent } from './Components/client/edit/edit.component';
import { GetLoansComponent } from './Components/loan/get-loans/get-loans.component';
import { AddLoanComponent } from './Components/loan/add-loan/add-loan.component';
import { HomeComponent } from './Components/home/home.component';
import { NoopAnimationsModule} from '@angular/platform-browser/animations';
import { GetPaymentsComponent } from './Components/payment/get-payments/get-payments.component'

@NgModule({
  declarations: [
    AppComponent,
    MyNavigationComponent,
    DashboardComponent,
    AddComponent,
    EditComponent,
    AddLoanComponent,
    GetLoansComponent,
    HomeComponent,
    GetPaymentsComponent,
  ],
  imports: [
    NoopAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatInputModule,
    MatSelectModule
  ],
  exports:[
    AddComponent,
    DashboardComponent,
    GetLoansComponent,
    AddLoanComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
