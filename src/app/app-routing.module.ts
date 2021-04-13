import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './Components/client/add/add.component';
import { EditComponent } from './Components/client/edit/edit.component';
import { DashboardComponent} from './Components/dashboard/dashboard.component'
import { HomeComponent } from './Components/home/home.component';
import { AddLoanComponent} from './Components/loan/add-loan/add-loan.component'
import { GetLoansComponent} from './Components/loan/get-loans/get-loans.component'
import { PaymentComponent } from './Components/payment/payment.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'clients' , component: DashboardComponent},
  {path: 'clients/add', component: AddComponent},
  {path: 'clients/edit', component: EditComponent},
  {path: 'loans', component: GetLoansComponent},
  {path: 'loans/add', component: AddLoanComponent},
  {path: 'payments', component: PaymentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }