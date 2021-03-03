import { Injectable } from '@angular/core';
import {Client} from '../../Models/Client/client.interface'
import {Observable} from 'rxjs'
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ListarDataService {

  private urlApi = "http://127.0.0.1:8000/api/"

  headerName = 'X-XSRF-TOKEN';

  constructor(private http:HttpClient) { }

  getAllClients():Observable<Client[]>{
    const ops = {
      headers : new HttpHeaders({
        'X-Requested-With' : 'HttpClient' 
      })
    };
    return this.http.get<Client[]>(this.urlApi+"clients",ops);
  }
  
  getClients():Observable<Client[]>{
    return this.http.get<Client[]>(this.urlApi+"clients");
  }

  deleteClient(client:Client){
    return this.http.delete<Client[]>(this.urlApi+"clients/"+client.id)
  }
}