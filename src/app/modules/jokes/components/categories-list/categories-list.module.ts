import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { CategoriesListComponent } from './categories-list.component';

@NgModule({
  declarations: [
    CategoriesListComponent,
  ],
  exports: [
    CategoriesListComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
  ],
})
export class CategoriesListModule { }
