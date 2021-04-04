import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'
import { ListarDataService } from 'src/app/Services/client/listar-data.service';
import { Client } from '../../../Models/Client/client.interface'

@Component({
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})

export class AddComponent implements OnInit {

  formAdd : FormGroup;
  clientsUpdated:Client[] = [];
  client = new Client();

  ngOnInit(): void {}

  get name(){ return this.formAdd.get('name')}
  
  constructor(private service:ListarDataService, private _formBuilder: FormBuilder) {
    this.formAdd = this._formBuilder.group({
      name: ['',Validators.required],
      phone: ['',Validators.compose([,Validators.required,Validators.minLength(10),Validators.maxLength(10)])],
      address : ['',Validators.required]
    })
  }

  getClients(){
    this.service.getClients().subscribe( data => {
      this.clientsUpdated = data;
    })
  }

  saveClient(values : FormGroup){
    this.service.addClient(values.getRawValue()).subscribe( data => {
      this.getClients()
    })
  }
}