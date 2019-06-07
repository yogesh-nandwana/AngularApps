import { Component, OnInit } from '@angular/core';
import {Todo} from '../../model/Todo';
import {TodoService} from '../../services/todo.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  todos:Todo[]; 
  copyTodos:Todo[];

  constructor(private todoService:TodoService) {}

  ngOnInit() {
    this.todos = this.todoService.getTodos();
    this.copyTodos = Object.assign([],this.todos);
  }

  deleteTodo(todo:Todo) {
    console.log("Todo to delete:"+todo.text);
    let filteredTdos = this.todos.filter(t => t.id !== todo.id);
    this.todos.splice(this.todos.indexOf(filteredTdos[0]),1);
    this.copyTodos = Object.assign([],this.todos);
  }

  addTodo(todo:Todo) {
    if(todo.text.trim().length>0){
       todo.id = this.getNextTodoSrNo();
        if(!this.isDuplicateTodo(todo)){
          this.todos.push(todo);
        }else{
          console.warn("duplicate todo:"+todo.text);
        }
        this.copyTodos = Object.assign([],this.todos);
    }else{
      console.warn("Invalid todo!");
    }
  }

  searchTodo(todoToSearch:string){
    console.log("todoToSearch:"+todoToSearch);
    let searchedTodos = [];
    if(todoToSearch!=undefined && todoToSearch.trim().length > 0){
      let found = this.copyTodos.filter(function(t){
        if(t.text.indexOf(todoToSearch)!=-1){
          return t;
        }
      });
      searchedTodos = found.length>0?found:[];
    }else{
      searchedTodos = Object.assign([],this.copyTodos);
    }
    this.todos = searchedTodos;
  }

  isDuplicateTodo(todo){
    let found = this.todos.filter(function(t){
      if(t.text === todo.text){
        return todo;
      }
    });
    return found.length>0;
  }

  getNextTodoSrNo() {
    let maxSrNo = 0;
    this.todos.forEach(function(t){
      if(t.id>maxSrNo) {
         maxSrNo = t.id;
      }
    });
    return maxSrNo+1;
  }
}