import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './Components/client/add/add.component';
import { EditComponent } from './Components/client/edit/edit.component';
import { DashboardComponent} from './Components/dashboard/dashboard.component'

const routes: Routes = [
  {path: 'add', component: AddComponent},
  {path: 'edit', component: EditComponent},
  {path: '' , component: DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }