import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MyFirstComponentClass } from './MyFirstComponent/MyFirstComponent';
import { IksdeComponent } from './iksde/iksde.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { Task2PracticingDatabindingComponent } from './task2-practicing-databinding/task2-practicing-databinding.component';
import { PracticingDirectivesComponent } from './task3-practicing-directives/practicing-directives.component';

@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponentClass,
    IksdeComponent,
    WarningAlertComponent,
    Task2PracticingDatabindingComponent,
    PracticingDirectivesComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
