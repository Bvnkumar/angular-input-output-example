import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Input() name;// Getting data form child
@Output() childgo=new EventEmitter();// passing data to parent
  constructor() { }

  ngOnInit() {
  }
childPassing(){
	this.childgo.emit('hello narendra how are you!')
}
}
