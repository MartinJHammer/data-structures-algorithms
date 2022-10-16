import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HashTableIndexComponent } from './components/index/hash-table-index.component';
import { HasTableModule } from './hash-table-routing.module';

@NgModule({
  imports: [
    CommonModule,
    HasTableModule
  ],
  declarations: [
    HashTableIndexComponent
  ]
})
export class HashTableModule { }
