import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from './gitHubResponse.interface';
@Injectable({
  providedIn: 'root',
})
export class GithubService {
  constructor(private http: HttpClient) {}
  getUser(username: string) {
    return this.http.get<Response>(`https://api.github.com/users/${username}`);
  }
}
