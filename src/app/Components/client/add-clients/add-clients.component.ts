import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ListarDataService } from 'src/app/Services/client/listar-data.service';
import { Client } from '../../../Models/Client/client.interface'

@Component({
  selector: 'app-add-clients',
  templateUrl: './add-clients.component.html',
  styleUrls: ['./add-clients.component.css']
})

export class AddClientsComponent implements OnInit, OnDestroy {

  constructor(private service:ListarDataService, private _formBuilder: FormBuilder) {
    this.formAdd = this._formBuilder.group({
      name: ['',Validators.required],
      phone: ['',Validators.compose([,Validators.required,Validators.minLength(10),Validators.maxLength(10)])],
      address : ['',Validators.required]
    })
  }

  formAdd : FormGroup;
  clientsUpdated:Client[] = [];
  client = new Client();
  clientsSubscription : Subscription = new Subscription()

  ngOnInit(): void {
  }

  ngOnDestroy(): void{
    this.clientsSubscription.unsubscribe()
  }

  getClients(){
    this.clientsSubscription = this.service.getClients().subscribe( data => {
      this.clientsUpdated = data;
    })
  }

  saveClient(values : FormGroup){
    this.clientsSubscription = this.service.addClient(values.getRawValue()).subscribe( data => {
      this.getClients()
    })
  }
}