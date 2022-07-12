import { Injectable } from '@angular/core';
import { CATEGORIES, JOKE, ROOT } from '@routing/const/routing.conts';

@Injectable({
  providedIn: 'root'
})
export class RoutingPathService {

  public getJoke(categoryName: string): string[] {
    return [ROOT, JOKE, categoryName];
  }

  public getCategories(): string[] {
    return [ROOT, CATEGORIES];
  }

}
