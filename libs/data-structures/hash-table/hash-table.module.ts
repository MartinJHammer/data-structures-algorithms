import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './components/index/index.component';
import { HashTableIndexComponent } from './components/index/hash-table-index.component';



@NgModule({
  declarations: [
    IndexComponent,
    HashTableIndexComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HashTableModule { }
