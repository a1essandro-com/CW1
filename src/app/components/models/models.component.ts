import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.css']
})
export class ModelsComponent implements OnInit {
  model: any;

  Sub: Subscription;

  constructor(private route: ActivatedRoute) { 
    this.Sub = this.route.params.subscribe(params => {
      if (params["id"] !== undefined) {
        this.model = localStorage.getItem(params["id"]);
      }
    })
  }

  ngOnInit(): void {
  }

 }
