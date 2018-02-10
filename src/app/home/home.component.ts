import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User, Todo } from '../models/index';
import { AppComponent } from '../../app/app.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  todos: Todo[] = [];

  constructor( private router: Router, private app: AppComponent ) { }

  ngOnInit() {
    // capturar o usuário logado ou redirecionar para login
    this.app.currentUser = new User();
    this.app.currentUser.id = 1;
    this.app.currentUser.email = 'email@email.com';
    this.app.currentUser.name = 'user 1';

    // monta a lista de todos conforme o usuário
    for ( let x = 1; x < 10; x++) {
      const todoTemp = new Todo();
      todoTemp.id =  x;
      todoTemp.title = `Todo ${x}`;
      todoTemp.created_at = Date.now();
      todoTemp.updated_at = Date.now();

      this.todos.push(todoTemp);
    }

  }

}
