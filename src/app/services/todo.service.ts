import { Injectable } from '@angular/core';
import{ Todo } from '../interfaces/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

todos:Todo[]= [{
  'id':1,
  'title':'First todo',
  'completed':false,
  'editing':false},
  {
  'id':2,
  'title':'Second todo',
  'completed':false,
  'editing':false}];
idForTodo = this.todos.length;
todoTitle:string ='';
beforEdit:string='';
filter:string = "all";

  constructor() { }

  addTodo(todoTitle : string):void{
    alert(todoTitle);
    this.todos.push({
      id : this.idForTodo,
      title:todoTitle,
      completed:false,
      editing:false
 
    })
    
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


