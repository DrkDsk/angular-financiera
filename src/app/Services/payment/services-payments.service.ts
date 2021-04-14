import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from 'src/app/Models/Client/client.interface';
import { Observable } from 'rxjs';
import { Payment } from 'src/app/Models/Payment/payment.interface';

@Injectable({
  providedIn: 'root'
})
export class ServicesPaymentsService {

  urlApi = "/api/"

  constructor(private http:HttpClient) { }

  getNames():Observable<Client[]>{
    return this.http.get<Client[]>(this.urlApi+'loans')
  }

  getPaymentsById(id: string):Observable<Payment[]>{
    return this.http.get<Payment[]>(this.urlApi+"payment/"+id)
  }
}
