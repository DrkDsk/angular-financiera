import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import { AddComponent } from './Components/client/add/add.component';
import { DashboardComponent} from './Components/dashboard/dashboard.component'

const routes: Routes = [
  {path: 'add', component: AddComponent},
  {path: '' , component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
