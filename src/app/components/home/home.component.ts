import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  topic: string =  'Веб-сайт - конструктор визитных карточек';

  //constructor() { }

 ngOnInit(): void {

  }

}
