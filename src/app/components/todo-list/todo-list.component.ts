import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
todos:object[];
todoTitle:string;
idForTodo: number;
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
    this.idForTodo = this.todos.length;
  }
 addTodo():void{
   if(this.todoTitle.trim().length === 0){return;}
   this.todos.push({
     id : this.idForTodo,
     title:this.todoTitle,
     completed:false,
     edditing:false

   })
   this.todoTitle="";
   this.idForTodo++;
 }

 deleteTodo(id:number):void{
   this.todos = this.todos.filter(todo => todo.id !== id);

 }
}
