import { Component, OnInit } from '@angular/core';
import{ Todo } from '../../interfaces/todo';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
todos:Todo[];
todoTitle:string;
idForTodo: number;
  constructor() { }

  ngOnInit() {
    this.todoTitle ='';
    this.todos = [{
    'id':1,
    'title':'First todo',
    'completed':false,
    'editing':false},
    {
    'id':2,
    'title':'Second todo',
    'completed':false,
    'editing':false}]
    this.idForTodo = this.todos.length;
  }
 addTodo():void{
   if(this.todoTitle.trim().length === 0){return;}
   this.todos.push({
     id : this.idForTodo,
     title:this.todoTitle,
     completed:false,
     editing:false

   })
   this.todoTitle="";
   this.idForTodo++;
 }

 deleteTodo(id:number):void{
   this.todos = this.todos.filter(todo => todo.id !== id);
 }

 editTodo(todo:Todo):void{
   todo.editing = true;

 }

}




