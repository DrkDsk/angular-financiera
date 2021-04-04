import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from 'src/app/Models/Client/client.interface';
import { Loan } from 'src/app/Models/Loan/loan.interface';
import { LoanRequest } from 'src/app/Models/Loan/loan_request.interface';

@Injectable({
  providedIn: 'root'
})
export class ServicesLoanService {

  urlApi = "/api/"

  constructor(private http:HttpClient) { }

  getLoans():Observable<Loan[]>{
    return this.http.get<Loan[]>(this.urlApi+'loans')
  }

  getNames():Observable<Client[]>{
    return this.http.get<Client[]>(this.urlApi+'clients')
  }

  deleteLoan(id : string){
    return this.http.delete<Loan>(this.urlApi+"loans/" + id);
  }

  addLoan(loan:Loan){
    return this.http.post<Loan>(this.urlApi+'loans',loan);
  }
}
