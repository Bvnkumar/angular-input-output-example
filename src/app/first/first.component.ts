import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  name = "narendra"
  constructor() { }

  ngOnInit() {
  }
  parent() {
    alert("from child to parent")
  }
}
