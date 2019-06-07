import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { Todo } from '../../model/Todo';

@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.component.html',
  styleUrls: ['./addtodo.component.css']
})

export class AddtodoComponent implements OnInit {
  todoTxt: string;
  addBttnEnableFlag:boolean;

  @Output() addTodoEvtEmitter: EventEmitter<Todo> = new EventEmitter<Todo>();

  constructor() {}

  ngOnInit() {} 

  onSubmit(){
    const todo = {id:0,text: this.todoTxt.trim(),completed: false};
    this.addTodoEvtEmitter.emit(todo);
  }

  onChange(){
    if(this.todoTxt.trim().length>0){
      this.addBttnEnableFlag = true;
    }
  }
}