import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly API = 'http://localhost:3000/user';

  private usersSubject = new BehaviorSubject<User[]>([]);
  private listUser: User[] = [];

  constructor(private http: HttpClient) {}

  listar(): Observable<User[]> {
    return this.http.get<User[]>(this.API);
  }

  criar(user: User): Observable<User> {
    return this.http.post<User>(this.API, user);
  }

  excluir(id: number): Observable<User> {
    const url = `${this.API}/${id}`;
    return this.http.delete<User>(url);
  }

  searchUserId(id: number): Observable<User> {
    const url = `${this.API}/${id}`;
    return this.http.get<User>(url);
  }

  editar(user: User): Observable<User> {
    const url = `${this.API}/${user.id}`;
    return this.http.put<User>(url, user);
  }

  updateUserList(): void {
    this.http.get<User[]>('http://localhost:3000/user').subscribe((users) => {
      this.listUser = users;
      this.usersSubject.next(this.listUser);
    });
  }
}
