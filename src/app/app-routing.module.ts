import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FirstComponent} from './first/first.component';
import {ChildComponent} from './child/child.component';
import {ParentComponent} from './parent/parent.component';

const routes: Routes = [{path:'',component:FirstComponent},{
  path:'lazy',loadChildren:'./lazy.module#LazyModule'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
