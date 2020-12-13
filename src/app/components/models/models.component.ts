import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.css']
})
export class ModelsComponent implements OnInit {

  id: number = 0;
  product: string = 'default';
  date: number = 2005;
  price: number = 10000;
  routeSub: Subscription;
  querySub: Subscription;

  constructor(private route: ActivatedRoute) {
    this.routeSub = route.params.subscribe(params =>{
      this.id = params["id"];
    });
    this.querySub = route.queryParams.subscribe(qparams =>{
      this.product = qparams["product"];
      this.date = qparams["date"];
      this.price = qparams["price"];
    });
   }

  ngOnInit(): void {
  }

}
