import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User, Todo } from '../models/index';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentUser : User;
  todos : Todo[] = [];

  constructor( private router: Router ) { }

  ngOnInit() {
    // capturar o usuário logado ou redirecionar para login

    // monta a lista de todos conforme o usuário
    for(let x = 1; x < 10; x++){
      let todoTemp = new Todo();
      todoTemp.id =  x;
      todoTemp.title = `Todo ${x}`;
      todoTemp.created_at = Date.now();
      todoTemp.updated_at = Date.now();

      this.todos.push(todoTemp);
    }

  }

}
