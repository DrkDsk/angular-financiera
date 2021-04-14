import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router} from '@angular/router'
import { Subscription } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { ListarDataService } from 'src/app/Services/client/listar-data.service';
import { Client } from 'src/app/Models/Client/client.interface';

@Component({
  selector: 'app-get-clients',
  templateUrl: './get-clients.component.html',
  styleUrls: ['./get-clients.component.css']
})
export class GetClientsComponent implements OnInit,OnDestroy {

  constructor(private service : ListarDataService, private router:Router) { }

  client = new Client();
  @Input() clients:Client[] = [];
  clientsSubscription: Subscription = new Subscription;
  displayedColumns: string[] = ['name', 'phone', 'address', 'options'];
  dataSource = new MatTableDataSource<Client>(this.clients);

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
    localStorage.setItem("id",client.clientID)
    this.router.navigate(['clients/edit'])
  }

  saveClient(){
    this.service.addClient(this.client).subscribe( data => {
      this.ngOnInit()
    })
  }

  hideButton(){ return !this.router.url.localeCompare("/clients")}

}
