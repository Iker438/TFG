import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

const URL = 'http://localhost:3000/api/db';

interface User {
  id: number;
  username: string;
  role: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiRestService {
  private user: User = { id: 0, username: '', role: '' };
  private userObs = new BehaviorSubject<User>(this.user);
  userObs$ = this.userObs.asObservable();

  constructor(private http: HttpClient) {}

  setUser(user: User) {
    localStorage.setItem('id', user.id.toString());
    localStorage.setItem('username', user.username);
    localStorage.setItem('role', user.role);

    this.user = user;
    this.userObs.next(this.user);
  }

  getUser() {
    this.user.id = parseInt(localStorage.getItem('id') || '0', 10);
    this.user.username = localStorage.getItem('username') || '';
    this.user.role = localStorage.getItem('role') || '';

    return this.user;
  }

  getTopics(url: string = `${URL}/topics`): Observable<any> {
    const token = localStorage.getItem('token') || '';
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<any>(url, { headers });
  }

  postTopic(topic: any): Observable<any> {
    const token = localStorage.getItem('token') || '';
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post<any>(`${URL}/topics`, { title: topic.title }, { headers });
  }

  putTopic(topic: any): Observable<any> {
    const token = localStorage.getItem('token') || '';
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.put<any>(`${URL}/topics/${topic.id}`, { title: topic.title }, { headers });
  }

  deleteTopic(topic: any): Observable<any> {
    const token = localStorage.getItem('token') || '';
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.delete<any>(`${URL}/topics/${topic.id}`, { headers });
  }
}
