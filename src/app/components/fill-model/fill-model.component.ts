import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fill-model',
  templateUrl: './fill-model.component.html',
  styleUrls: ['./fill-model.component.css']
})
export class FillModelComponent implements OnInit {

  newModels: number = 0;

  constructor() { }

  addModel(){
    if(this.newModels<6){
      this.newModels++;
    }
  }

  deleteModel(){
    if(this.newModels>0){
      this.newModels--;
    }
  }

  ngOnInit(): void {
  }

}
