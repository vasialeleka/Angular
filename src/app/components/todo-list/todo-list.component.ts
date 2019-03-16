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
beforEdit:string;
filter:string;
  constructor() { }

  ngOnInit() {
    this.filter = 'all';
    this.todoTitle ='';
    this.beforEdit ='';
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
   this.beforEdit =  todo.title;
   todo.editing = true;

 }
 doneEdit(todo:Todo):void{
   if(todo.title.trim().length === 0){
     todo.title = this.beforEdit;
   }
   todo.editing=false;
   
 }
 cancelTodo(todo:Todo):void{
  todo.title = this.beforEdit;
  todo.editing = false;
 }

 sizeList():number{
   return this.todos.filter(todo => !todo.completed).length;
 }

 todoFilter():Todo[]{
   if(this.filter ==='all'){
     return this.todos;
   } else if (this.filter==='active'){
     return this.todos.filter(todo => !todo.completed);
    }else if (this.filter==='completed'){
      return this.todos.filter(todo => todo.completed);
     }
 }
}




