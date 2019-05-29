import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router';
import { LazyFirstComponent } from './lazy-first/lazy-first.component';
var routes=[{path:'',component:LazyFirstComponent}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LazyFirstComponent]
})
export class LazyModule { }
