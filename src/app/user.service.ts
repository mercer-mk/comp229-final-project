import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly baseUrl = 'https://comp229-final-project.vercel.app/api/users';

  constructor(private httpClient: HttpClient) { }

  saveUser(user) {
    return this.httpClient.post(`${this.baseUrl}`, user);
  }

  signUp(user) {
    return this.httpClient.post(`${this.baseUrl}/signUp`, user);
  }

  updateUser(user) {
    return this.httpClient.put(`${this.baseUrl}/${user.username}`, user);
  }

  getUsers() {
    return this.httpClient.get(`${this.baseUrl}/list`);
  }

  deleteUser(user) {
    return this.httpClient.post(`${this.baseUrl}/delete`, { username: user.username });
  }
}