import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
todos:object[];
todoTitle:string;
  constructor() { }

  ngOnInit() {
    this.todoTitle ='';
    this.todos = [{'id':1,
    'title':'First todo',
    'completed':false,
    'edditing':false},
    {'id':2,
    'title':'Second todo',
    'completed':false,
    'edditing':false}]
  }

}
