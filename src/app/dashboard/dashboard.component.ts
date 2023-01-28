import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ServicesService} from "../services/services.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  tableFruits : any = [];

  constructor( private router : Router, private servicesService : ServicesService) {
  }

  ngOnInit(): void {
    this.getTableFruits();
  }

  getTableFruits(){
   this.tableFruits =  this.servicesService.productTable;
  }


}
