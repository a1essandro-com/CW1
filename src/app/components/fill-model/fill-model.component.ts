import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fill-model',
  templateUrl: './fill-model.component.html',
  styleUrls: ['./fill-model.component.css']
})
export class FillModelComponent implements OnInit {

    model = {
      id: 1,
      product: "default",
      date: 2015,
      price: 10000
    }
    constructor(private router: Router) { }
  
    ngOnInit(): void {
    }
  
    addModel() {
      this.router.navigate(["/"], {
        queryParams: {
          "id": this.model.id,
          "product": this.model.product,
          "date": this.model.date,
          "price": this.model.price,
        }
      })
    }
  }