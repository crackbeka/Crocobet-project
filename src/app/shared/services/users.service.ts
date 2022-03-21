import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user.model';
import { ApiService } from './api.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  //
  users$ = new BehaviorSubject<User[]>([]);

  //
  constructor(private api: ApiService) {}

  //
  getUsers(): Observable<User[]> {
    return this.api
      .get<User[]>('users')
      .pipe(tap((users) => this.users$.next(users)));
  }

  //
  findUser(userId: number): User | undefined {
    return this.users$.value.find(({ id }) => id === userId);
  }
}
