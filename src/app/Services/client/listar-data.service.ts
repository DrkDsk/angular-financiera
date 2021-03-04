import { Injectable } from '@angular/core';
import {Client} from '../../Models/Client/client.interface'
import {Observable} from 'rxjs'
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ListarDataService {

  private urlApi = "http://127.0.0.1:8000/api/"

  constructor(private http:HttpClient) { }
  
  getClients():Observable<Client[]>{
    return this.http.get<Client[]>(this.urlApi+"clients");
  }

  deleteClient(client:Client){
    return this.http.delete<Client[]>(this.urlApi+"clients/"+client.id)
  }

  addClient(client:Client){
    return this.http.post<Client>(this.urlApi + 'clients',client)
  }
}