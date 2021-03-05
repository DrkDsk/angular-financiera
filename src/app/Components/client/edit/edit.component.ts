import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Client} from '../../../Models/Client/client.interface'
import { ListarDataService}  from '../../../Services/client/listar-data.service'

@Component({
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  client : Client =  new Client();
  clients : Client[] = [];

  constructor(private service : ListarDataService, private router:Router) { }

  ngOnInit(): void {
    let userIdJson = JSON.parse(localStorage.getItem("id") || '{}')
    this.service.getClientById(userIdJson).subscribe(data => {
      this.client = data;
    })
  }

  updataClient(client:Client){
    this.service.updateClient(client).subscribe(data => {
      this.router.navigate([''])
    })
  }
}
