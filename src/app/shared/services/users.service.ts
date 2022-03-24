import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user.model';
import { ApiService } from './api.service';
import { tap } from 'rxjs/operators';
import { Post } from '../../posts/posts.service';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  users$ = new BehaviorSubject<User[]>([]);

  constructor(private api: ApiService) {}

  /**
   * Get all the users and store them in subject
   *
   * @returns
   */
  getUsers(): Observable<User[]> {
    return this.api
      .get<User[]>('users')
      .pipe(tap((users: User[]) => this.users$.next(users)));
  }

  /**
   * Get specific user from api
   *
   * @param userId
   * @returns
   */
  getUser(userId: number): Observable<User> {
    return this.api.get<User>(`users/${userId}`);
  }

  /**
   * Find user details in users subject
   *
   * @param userId
   * @returns
   */
  findUser(userId: number): User | undefined {
    return this.users$.value.find(({ id }) => id === userId);
  }

  /**
   * Get posts created by user
   *
   * @param userId
   * @returns
   */
  getPosts(userId: number): Observable<Post[]> {
    return this.api.get<Post[]>(`users/${userId}/posts`);
  }
}
