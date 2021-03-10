import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { ListarDataService } from 'src/app/Services/client/listar-data.service';
import { Client } from '../../../Models/Client/client.interface'

@Component({
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})

export class AddComponent implements OnInit {

  clientsUpdated:Client[] = [];
  client = new Client();

  ngOnInit(): void {}
  
  constructor(private router: Router, private service:ListarDataService) { }

  getClients(){
    this.service.getClients().subscribe( data => {
      this.clientsUpdated = data;
    })
  }

  saveClient(){
    this.service.addClient(this.client).subscribe( data => {
      this.getClients()
    })
  }
}
