import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Loan } from '../../../Models/Loan/loan.interface'
import { Router} from '@angular/router'
import {ServicesLoanService} from '../../../Services/loan/services-loan.service'

@Component({
  selector: 'app-get-loans',
  templateUrl: './get-loans.component.html',
  styleUrls: ['./get-loans.component.css']
})
export class GetLoansComponent implements OnInit {

  @Input() loans:Loan[] = []
  loansSubscription: Subscription = new Subscription;

  constructor(private service : ServicesLoanService, private router:Router) { }

  ngOnInit(): void {
    this.loansSubscription = this.service.getLoans().subscribe( data => {
      this.loans = data;
    })
  }

  hideButton(){
    return !this.router.url.localeCompare("/loans")
  }

  pay(){

  }

  deleteLoan(){

  }
}
