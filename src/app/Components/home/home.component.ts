import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ListarDataService } from 'src/app/Services/client/listar-data.service';
import { Statistic } from '../../Models/Client/statistic.interface'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  clientsSubscription : Subscription = new Subscription;

  constructor(private service: ListarDataService) { }

  statistics : Statistic = new Statistic();

  ngOnInit(): void {

    this.clientsSubscription = this.service.getStatistics().subscribe( data => {
      this.statistics = data;
    })
  }

  ngOnDestroy(): void{
    this.clientsSubscription.unsubscribe()
  }

}
