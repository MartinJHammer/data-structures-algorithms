import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HashTableIndexComponent } from './components/index/hash-table-index.component';

const routes: Routes = [
  {
    path: '',
    component: HashTableIndexComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HasTableModule { }
