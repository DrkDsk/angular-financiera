import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './Components/client/add/add.component';
import { EditComponent } from './Components/client/edit/edit.component';
import { DashboardComponent} from './Components/dashboard/dashboard.component'
import { AddLoanComponent} from './Components/loan/add-loan/add-loan.component'
import { GetLoansComponent} from './Components/loan/get-loans/get-loans.component'

const routes: Routes = [
  {path: 'clients' , component: DashboardComponent},
  {path: 'clients/add', component: AddComponent},
  {path: 'clients/edit', component: EditComponent},
  {path: 'loans', component: GetLoansComponent},
  {path: 'loans/add', component: AddLoanComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }