import { Component } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styleUrls: ['./warning-alert.component.css'],
})
export class WarningAlertComponent {
  id: number = 10;
  // content: string = 'wrong input';
  status: boolean = false;
  content: string = '';
  twoWayDataBinding: string = '';
  propertyBinding: string = 'text provided by: property binding';

  fourTypesDataBinding: string = '';

  updatedName: string = '';

  warningContent() {
    return this.content;
  }

  getId() {
    return typeof this.id;
  }

  getStatus() {
    this.status = !this.status;
    console.log('kupa');
    return this.status;
  }

  displayPressedKey(event) {
    console.log(event.key);
    this.content = event.target.value;
    // event.data==="" $$console.log(event.data);
  }
  handleEnterKey(event) {
    if (event.key === 'Enter') {
      event.target.value = '';
      this.content = '';
    }
  }

  handleButtonClick(): void {
    // Perform any necessary logic or updates here
    this.updatedName = this.fourTypesDataBinding;
  }
}
