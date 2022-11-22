import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  newChore: string = "";
  index: number = 0;

  chores = [
    { title: 'Sacar al perro', isDone: false,},
    { title: 'Pagar fantas', isDone: true },
    { title: 'Conquistar su corazon', isDone: false },
  ];

  addChore (newChore: string) {
    this.chores.push({title: newChore, isDone: false})
  }

  upPosition (index: number) {
    if (index <= 0) {
      return;
    } else {
      let oldChore = this.chores[index - 1];
      this.chores[index -1 ] = this.chores[index];
      this.chores[index] = oldChore;
    }
  }

  downPosition (index: number) {
    let oldChore = this.chores[index + 1];
    this.chores[index + 1] = this.chores[index];
    this.chores[index] = oldChore;
  }

  delete (index: number) {
    this.chores.splice(index, 1);
  }
}
