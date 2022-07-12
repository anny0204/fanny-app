import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeViewComponent } from './home-view.component';

@NgModule({
  declarations: [
    HomeViewComponent,
  ],
  exports: [
    HomeViewComponent,
  ],
  imports: [
    CommonModule,
  ],
})
export class HomeViewModule { }
