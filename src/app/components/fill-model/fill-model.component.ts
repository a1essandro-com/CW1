import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fill-model',
  templateUrl: './fill-model.component.html',
  styleUrls: ['./fill-model.component.css']
})
export class FillModelComponent implements OnInit {

  item = {
    id: 0,
    product: 'default',
    date: 2015,
    price: 10000
  }

  constructor(private router: Router) {

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  goToItem(item: any){
    this.router.navigate(['/model', item.id],{
      queryParams: {
        "product": item.product,
        "date": item.date,
        "price": item.price
      }
    })
  }
  models: any[] = [];
  addModel(model:any){
    this.models.push({
        "id": model.id, 
        "product": model.product,
       "date": model.date,
    "price": model.price    
  })
 }
 
} 
