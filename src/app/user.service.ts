import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly baseUrl = 'https://final-project-jl4d.onrender.com/api/users';

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