import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { OutputType } from '@angular/core/src/view';
import { Todo } from '../../model/Todo';

@Component({
  selector: 'app-searchtodo',
  templateUrl: './searchtodo.component.html',
  styleUrls: ['./searchtodo.component.css']
})
export class SearchtodoComponent implements OnInit {
  todoToSearch:string;
  @Output() searchTodoEvtEmitter : EventEmitter<string> =  new EventEmitter<string>();

  constructor() { }

  ngOnInit() {}

  searchTodo(){
    this.searchTodoEvtEmitter.emit(this.todoToSearch);
  }
}