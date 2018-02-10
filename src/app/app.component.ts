import { Component } from '@angular/core';
import { User } from './models/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rails api - frontend';
  currentUser: User;

  isLoggedIn() {
    return (this.currentUser !== undefined);
  }
}
