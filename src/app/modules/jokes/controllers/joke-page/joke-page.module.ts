import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JokePageComponent } from './joke-page.component';
import { RouterModule } from '@angular/router';
import { JokeModule } from '../../components/joke/joke.module';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    JokePageComponent,
  ],
  imports: [
    CommonModule,
    JokeModule,
    MatCardModule,
    RouterModule.forChild([
      {
        path: '',
        component: JokePageComponent,
      },
    ]),
  ],
})
export class JokePageModule { }
