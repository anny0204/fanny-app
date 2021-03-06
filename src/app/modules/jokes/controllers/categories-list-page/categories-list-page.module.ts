import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesListPageComponent } from './categories-list-page.component';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { CategoriesListModule } from '../../components/categories-list/categories-list.module';


@NgModule({
  declarations: [
    CategoriesListPageComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    CategoriesListModule,
    RouterModule.forChild([
      {
        path: '',
        component: CategoriesListPageComponent,
      },
    ]),
  ]
})
export class CategoriesListPageModule { }
