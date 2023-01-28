import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ActivitiesComponent} from "./activities/activities.component";
import {CustomersComponent} from "./customers/customers.component";
import {ProjectsComponent} from "./projects/projects.component";



const routes: Routes = [

  {path : "dashboard", component : DashboardComponent},
  {path : "activities", component : ActivitiesComponent},
  {path : "customers", component : CustomersComponent },
  {path : "projects", component : ProjectsComponent },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
