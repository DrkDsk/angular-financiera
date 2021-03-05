import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyNavigationComponent } from './Components/my-navigation/my-navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { HttpClientModule} from '@angular/common/http';
import { AddComponent } from './Components/client/add/add.component';
import { FormsModule } from '@angular/forms'
import { MatInputModule} from '@angular/material/input';
import { EditComponent } from './Components/client/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    MyNavigationComponent,
    DashboardComponent,
    AddComponent,
    EditComponent
  ],
  
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatInputModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
