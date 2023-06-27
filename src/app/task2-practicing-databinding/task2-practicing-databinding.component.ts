import { Component } from '@angular/core';

@Component({
  selector: 'app-task2-practicing-databinding',
  templateUrl: './task2-practicing-databinding.component.html',
  styleUrls: ['./task2-practicing-databinding.component.css'],
})
export class Task2PracticingDatabindingComponent {
  username: string = '';

  handleBtnClick() {
    this.username = '';
  }

  getColor() {
    return this.username.length > 4 ? 'green' : 'red';
  }
}
