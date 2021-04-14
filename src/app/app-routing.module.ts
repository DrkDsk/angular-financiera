import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddClientsComponent } from './Components/client/add-clients/add-clients.component';
import { EditClientsComponent } from './Components/client/edit-clients/edit-clients.component';
import { GetClientsComponent } from './Components/client/get-clients/get-clients.component';
import { HomeComponent } from './Components/home/home.component';
import { AddLoanComponent} from './Components/loan/add-loan/add-loan.component'
import { GetLoansComponent} from './Components/loan/get-loans/get-loans.component'
import { GetPaymentsComponent } from './Components/payment/get-payments/get-payments.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'clients' , component: GetClientsComponent},
  {path: 'clients/add', component: AddClientsComponent},
  {path: 'clients/edit', component: EditClientsComponent},
  {path: 'loans', component: GetLoansComponent},
  {path: 'loans/add', component: AddLoanComponent},
  {path: 'payments', component: GetPaymentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }