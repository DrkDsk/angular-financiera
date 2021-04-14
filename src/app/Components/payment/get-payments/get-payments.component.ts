import { Component, OnInit,Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Client } from 'src/app/Models/Client/client.interface';
import { ServicesLoanService } from 'src/app/Services/loan/services-loan.service';
import { ServicesPaymentsService } from 'src/app/Services/payment/services-payments.service';
import { MatTableDataSource } from '@angular/material/table';
import { Payment } from 'src/app/Models/Payment/payment.interface';

@Component({
  selector: 'app-get-payments',
  templateUrl: './get-payments.component.html',
  styleUrls: ['./get-payments.component.css']
})
export class GetPaymentsComponent implements OnInit, OnDestroy {

  constructor(private service: ServicesPaymentsService) { }

  @Input() clients:Client[] = []
  @Input() payments:Payment[] = []
  selected : boolean = false
  clientsSubscription : Subscription = new Subscription()
  displayedColumns: string[] = ['numero_pago','name', 'amount', 'total_pay'];
  dataSource = new MatTableDataSource<Payment>(this.payments);

  ngOnInit(): void {
    this.clientsSubscription = this.service.getNames().subscribe(data =>{
      this.clients = data
    })
  }

  ngOnDestroy(){
    this.clientsSubscription.unsubscribe()
  }

  select(id : string){
    if(id){
      this.clientsSubscription = this.service.getPaymentsById(id).subscribe(data =>{
        this.payments = data
        this.selected = true
      })
    }
    else{
      this.selected = false
    }
  }
}
