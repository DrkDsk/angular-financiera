import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ServicesLoanService} from '../../../Services/loan/services-loan.service'
import { Router} from '@angular/router'
import { Client } from 'src/app/Models/Client/client.interface';

@Component({
  selector: 'app-add-loan',
  templateUrl: './add-loan.component.html',
  styleUrls: ['./add-loan.component.css']
})
export class AddLoanComponent implements OnInit {

  loanControl = new FormControl('',Validators.required)
  @Input() clients:Client[] = []
  loansSubscription: Subscription = new Subscription;
  myForm : FormGroup;

  constructor(private service : ServicesLoanService, private router:Router, private _formBuilder: FormBuilder) {
    this.myForm = this._formBuilder.group({
      amount : ['',Validators.required],
      porcent: ['',Validators.required],
      payments_number : ['',Validators.required],
      fee: ['',Validators.required],
      ministry_date : ['',Validators.required],
      due_date : ['',Validators.required]
    })
  }

  ngOnInit(): void {
    this.loansSubscription = this.service.getNames().subscribe( data => {
      this.clients = data;
    })
    this.setFee()
    this.setDueDate()
  }

  setFee(){
    this.myForm.valueChanges.subscribe(value => {
      var amount = value['amount']
      var porcent = value['porcent']
      var noPayments = value['payments_number']
      var fee = ((((amount * porcent) / 100) + amount)) / noPayments

      if(isFinite(fee)){
        this.myForm.controls.fee.setValue(fee,{emitEvent:false})
      }
      else{
        this.myForm.controls.fee.setValue('',{emitEvent:false})
      }
    })
  }

  setDueDate(){
    this.myForm.valueChanges.subscribe(value => {
      if(value['ministry_date']){
        var ministry_date = new Date(value['ministry_date'])
        ministry_date.setMinutes(ministry_date.getMinutes() + ministry_date.getTimezoneOffset())
        ministry_date.setDate(ministry_date.getDate() + 1)
        var i = 0
        var days = +value['payments_number']
        while(i < days){
          ministry_date.setDate(ministry_date.getDate() + 1)
          if(ministry_date.getDay() !=6 && ministry_date.getDay() != 0)
            i++;
        }
        var mes = ministry_date.getMonth()
        var dateString = (ministry_date.getFullYear()) + "-" + ("0"+(++mes)).slice(-2) + "-" + ("0"+ministry_date.getDate()).slice(-2)
        this.myForm.controls.due_date.setValue(dateString,{emitEvent:false})
      }
      else{
        this.myForm.controls.due_date.setValue("",{emitEvent:false})
      }
    })
  }
}