import { Component,Input,OnInit, Output,EventEmitter } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import {Todo} from '../../model/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input() todo :Todo;
  @Output() delTodoEvtEmitter: EventEmitter<Todo> = new EventEmitter<Todo>();

  constructor(private todoService:TodoService) {}

  ngOnInit() {}

  onToggle(){
    this.todo.completed = ! this.todo.completed;   
     // Toggle on server
     this.todoService.toggleCompleted(this.todo).subscribe(todo => console.log(todo));  
  }

  setClasses() {
    let classes = {
      'todo':true,
      'completedTodo': this.todo.completed
    }
    return classes;
  }

  onDelete(todo) {
    this.delTodoEvtEmitter.emit(todo);
  }
}
