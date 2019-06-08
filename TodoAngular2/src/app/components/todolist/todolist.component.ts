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
     this.todoService.getTodos().subscribe(todos => {this.todos = todos;});
    this.copyTodos = Object.assign([],this.todos);
  }

  deleteTodo(todo:Todo) {
    //delete from UI
    let filteredTdos = this.todos.filter(t => t.id === todo.id);
    this.todos.splice(this.todos.indexOf(filteredTdos[0]),1);
    this.copyTodos = Object.assign([],this.todos);
    //delete from server
    this.todoService.deleteTodo(todo).subscribe();
  }

  addTodo(todo:Todo) {
    if(todo.title.trim().length>0){
      if(!this.isDuplicateTodo(todo)){
       // todo.id = this.getNextTodoSrNo();
        this.todoService.addTodo(todo).subscribe(todo => {
            this.todos.push(todo)
            this.copyTodos.push(todo);
        });
      }else{
        console.warn("Duplicate todo!");
      }           
    }else{
      console.warn("Invalid todo!");
    }
  }

  searchTodo(todoToSearch:string){
    console.log("todoToSearch:"+todoToSearch);
    let searchedTodos = [];
    if(todoToSearch!=undefined && todoToSearch.trim().length > 0){
      let found = this.copyTodos.filter(function(t){
        if(t.title.indexOf(todoToSearch)!=-1){
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
      if(t.title === todo.title){
        return todo;
      }
    });
    return found.length>0;
  }

  // getNextTodoSrNo() {
  //   let maxSrNo = 0;
  //   this.todos.forEach(function(t){
  //     if(t.id>maxSrNo) {
  //        maxSrNo = t.id;
  //     }
  //   });
  //   return maxSrNo+1;
  // }
}
