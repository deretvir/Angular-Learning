import { Component } from '@angular/core';

@Component({
  selector: 'app-practicing-directives',
  templateUrl: './practicing-directives.component.html',
  styleUrls: ['./practicing-directives.component.css'],
})
export class PracticingDirectivesComponent {
  display: boolean = false;
  counter: number = 0;
  clickArray = [];

  handleToogle() {
    this.display = !this.display;

    this.clickArray.push(`click: `);
    console.log(this.clickArray);
  }
}
