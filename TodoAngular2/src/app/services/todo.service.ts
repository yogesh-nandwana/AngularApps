import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  getTodos(){
    return [
      {id:1,text:'todo11',completed:false},
      {id:2,text:'todo2',completed:false},
      {id:3,text:'todo3',completed:false},
      {id:4,text:'todo4',completed:true},
    ];
  }
}
