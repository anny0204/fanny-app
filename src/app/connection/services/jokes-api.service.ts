import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiEndpoint } from 'src/environments/environment';
import { BaseApiService } from './base-api.service';

@Injectable({
  providedIn: 'root'
})
export class JokesApiService extends BaseApiService{

  public getCategories(): Observable<any> {
    const url = `${this.API_HOST_URL}/${this.API_CONTEXT}/${apiEndpoint.JOKES.READ}`;

    return this.http.get<any>(url);
  }

}
