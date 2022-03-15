import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'section-5-transforming-content';
  name = 'lawrence dovin';
  currentDate = new Date();
  cost = 3144;
  temperature = 25.3;
  blueClass = true;

  isBlueClass() {
    this.blueClass = !this.blueClass
  }
}
