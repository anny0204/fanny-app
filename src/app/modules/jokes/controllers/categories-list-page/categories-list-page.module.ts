import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesListPageComponent } from './categories-list-page.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CategoriesListPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: CategoriesListPageComponent,
      },
    ]),
  ]
})
export class CategoriesListPageModule { }
