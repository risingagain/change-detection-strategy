import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'change-detection-strategy';
  items = ['shark', 'dolphin', 'octopus'];
  // items = new BehaviorSubject(['shark', 'dolphin', 'octopus']);

  addItem(item: any) {
    this.items.push(item);
    // For observable Data
    // this.items.next(item);
  }
}
