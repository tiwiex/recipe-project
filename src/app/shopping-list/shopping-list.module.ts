import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './shopping-list-edit/shopping-list-edit.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';

@NgModule({
  declarations: [ShoppingListComponent, ShoppingListEditComponent, ShoppingEditComponent],
  imports: [
    CommonModule
  ]
})
export class ShoppingListModule { }
