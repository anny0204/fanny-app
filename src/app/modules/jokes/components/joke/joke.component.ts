import { Component, EventEmitter, Input, Output } from '@angular/core';
import { JokeModel } from 'src/app/connection/models/joke.model';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.scss']
})
export class JokeComponent {

  @Input()
  public joke: JokeModel;

  @Output()
  public goBack: EventEmitter<void> = new EventEmitter<void>();

  @Output()
  public anotherOne: EventEmitter<void> = new EventEmitter<void>();

  public getAnotherOne(): void {
    this.anotherOne.next();
  }

  public handleGoBack(): void {
    this.goBack.next();
  }

}
