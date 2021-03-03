import { Component, OnInit } from '@angular/core';
import { ListarDataService}  from '../../Services/client/listar-data.service'
import { Client} from '../../Models/Client/client.interface'
import { Router} from '@angular/router'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  clients:Client[] = [];

  constructor( private service : ListarDataService, private router:Router) { }

  ngOnInit(): void {
    this.service.getClients().subscribe(data => {
      this.clients = data;
    })
  }

  deleteClient(client:Client){
    this.service.deleteClient(client).subscribe(data => {
      this.ngOnInit();
    })
  }
}