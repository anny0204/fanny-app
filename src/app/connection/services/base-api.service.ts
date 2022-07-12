import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseApiService {
  public constructor(
    protected http: HttpClient,
  ) { }

  protected readonly API_HOST_URL = 'https://api.chucknorris.io';
  protected readonly API_CONTEXT = 'jokes';
}
