import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Loan } from '../../../Models/Loan/loan.interface'
import { Router} from '@angular/router'
import {ServicesLoanService} from '../../../Services/loan/services-loan.service'
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-get-loans',
  templateUrl: './get-loans.component.html',
  styleUrls: ['./get-loans.component.css']
})
export class GetLoansComponent implements OnInit, OnDestroy {

  @Input() loans:Loan[] = []
  loansSubscription: Subscription = new Subscription;
  displayedColumns: string[] = ['name', 'amount', 'payments_number', 'fee','ministry_date', 'due_date', 'options'];
  dataSource = new MatTableDataSource<Loan>(this.loans);

  constructor(private service : ServicesLoanService, private router:Router) { }

  ngOnInit(): void {
    this.loansSubscription = this.service.getLoans().subscribe( data => {
      this.loans = data;
    })
  }

  ngOnDestroy(){
    this.loansSubscription.unsubscribe();
  }

  hideButton(){
    return !this.router.url.localeCompare("/loans")
  }

  addLoan(){
    this.router.navigate(["loans/add"])
  }

  pay(){

  }

  deleteLoan(id: string){
    this.loansSubscription = this.service.deleteLoan(id).subscribe(data => {
      this.ngOnInit()
    })
  }
}
