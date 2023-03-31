import { User } from './user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {
  private readonly API = 'http://localhost:3000/user';

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

  editar(user: User): Observable<User> {
    const url = `${this.API}/${user.id}`;
    return this.http.put<User>(url, user);
  }
}
