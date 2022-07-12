import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiEndpoint } from 'src/environments/environment';
import { JokeModel } from '../models/joke.model';
import { BaseApiService } from './base-api.service';

@Injectable({
  providedIn: 'root'
})
export class JokesApiService extends BaseApiService {

  public getJoke(categoryName: string): Observable<JokeModel> {
    const url = `${this.API_HOST_URL}/${this.API_CONTEXT}/${apiEndpoint.JOKES.READ}`;

    const httpParams = new HttpParams().set('category', categoryName);

    return this.http.get<JokeModel>(url, { params: httpParams });
  }

}
