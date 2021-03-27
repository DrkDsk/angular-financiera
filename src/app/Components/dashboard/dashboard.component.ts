import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ListarDataService}  from '../../Services/client/listar-data.service'
import { Client} from '../../Models/Client/client.interface'
import { Router} from '@angular/router'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit, OnDestroy {

  client = new Client();
  @Input() clients:Client[] = [];
  clientsSubscription: Subscription = new Subscription;

  constructor( private service : ListarDataService, private router:Router) { }

  ngOnInit(): void {
    this.clientsSubscription = this.service.getClients().subscribe(data => {
      this.clients = data;
    })
  }

  ngOnDestroy():void{
    this.clientsSubscription.unsubscribe();
  }

  deleteClient(client:Client){
    this.service.deleteClient(client).subscribe(data => {
      this.ngOnInit();
    })
  }

  addClient(){
    this.router.navigate(['/clients/add'])
  }

  editClient(client:Client){
    localStorage.setItem("id",client.id)
    this.router.navigate(['clients/edit'])
  }

  saveClient(){
    this.service.addClient(this.client).subscribe( data => {
      this.ngOnInit()
    })
  }

  hideButton(){ return !this.router.url.localeCompare("/clients") }
}