import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiEndpoint } from 'src/environments/environment';
import { BaseApiService } from './base-api.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriesApiService extends BaseApiService{

  public getCategories(): Observable<string[]> {
    const url = `${this.API_HOST_URL}/${this.API_CONTEXT}/${apiEndpoint.CATEGORIES.LIST}`;

    return this.http.get<string[]>(url);
  }

}
