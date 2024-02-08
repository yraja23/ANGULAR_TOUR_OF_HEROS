import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
  text: string = "Welcome";
  title: string = "give your name";
  number: number [] = [2,4,5,6,1,8,9,5,3,7];
  string: any;
  constructor()
  {
  }
  ngOnInit(): void{}
}
