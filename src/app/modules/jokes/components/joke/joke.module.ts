import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JokeComponent } from './joke.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    JokeComponent,
  ],
  exports: [
    JokeComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
  ],
})
export class JokeModule { }
