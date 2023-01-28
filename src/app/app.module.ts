import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
//import { HeaderComponent } from './header/header.component';
import {FormsModule} from "@angular/forms";
import {SidebarDirective} from "./sidebar.directive";
import {HelloComponent} from "./hello.component";
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomersComponent } from './customers/customers.component';
import { ProjectsComponent } from './projects/projects.component';
import { ActivitiesComponent } from './activities/activities.component';
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    SidebarDirective,
    HelloComponent,
    DashboardComponent,
    CustomersComponent,
    ProjectsComponent,
    ActivitiesComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
