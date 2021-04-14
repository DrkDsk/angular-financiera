import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Subscription } from 'rxjs';
import { Client} from '../../../Models/Client/client.interface'
import { ListarDataService}  from '../../../Services/client/listar-data.service'

@Component({
  selector: 'app-edit-clients',
  templateUrl: './edit-clients.component.html',
  styleUrls: ['./edit-clients.component.css']
})
export class EditClientsComponent implements OnInit, OnDestroy {

  constructor(private service : ListarDataService, private router:Router) { }

  client : Client =  new Client();
  clients : Client[] = [];
  clientsSubscription : Subscription = new Subscription();

  ngOnInit(): void {
    let userIdJson = JSON.parse(localStorage.getItem("id") || '{}')
    this.clientsSubscription = this.service.getClientById(userIdJson).subscribe(data => {
      this.client = data;
    })
  }

  ngOnDestroy():void{
    this.clientsSubscription.unsubscribe()
  }

  updataClient(client:Client){
    this.clientsSubscription = this.service.updateClient(client).subscribe(data => {
      this.router.navigate(['clients'])
    })
  }

}
