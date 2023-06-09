import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DogsService {
  constructor(private httpClient: HttpClient) {}

  getDogs() {
    return this.httpClient.get('http://localhost:3000/dogs');
  }
}
