import { Injectable } from '@angular/core';
import {Client} from '../../Models/Client/client.interface'
import {Observable} from 'rxjs'
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ListarDataService {

  private urlApi = "/api/"

  constructor(private http:HttpClient) { }
  
  getClients():Observable<Client[]>{
    return this.http.get<Client[]>(this.urlApi+"clients");
  }

  getClientById(id: string){
    return this.http.get<Client>(this.urlApi+"clients/" + id + '/edit')
  }

  deleteClient(client:Client){
    return this.http.delete<Client>(this.urlApi+"clients/" + client.id)
  }

  addClient(client:Client){
    return this.http.post<Client>(this.urlApi + 'clients',client)
  }
  
  editClient(client:Client){
    return this.http.patch<Client>(this.urlApi+ 'clients/' + client.id, client)
  }

  updateClient(client:Client){
    return this.http.put<Client>(this.urlApi + 'clients/', client)
  }
}