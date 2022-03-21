import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap, startWith } from 'rxjs/operators';
import { User } from '../shared/models/user.model';
import { ApiService } from '../shared/services/api.service';
import { UsersService } from '../shared/services/users.service';

export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
  user?: User;
}

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  //
  posts$ = new BehaviorSubject<Post[]>([]);

  //
  constructor(private api: ApiService, private users: UsersService) {}

  //
  getPosts(): Observable<Post[]> {
    return this.api.get<Post[]>('posts').pipe(
      map((posts) =>
        posts.map((post) => ({
          ...post,
          user: this.users.findUser(post.userId),
        }))
      ),
      tap((posts) => this.posts$.next(posts))
    );
  }

  //
  getPost(postId: Post['id']): Observable<Post> {
    return this.api.get<Post>(`posts/${postId}`).pipe(
      startWith(this.posts$.value.find(({ id }) => id === postId) as Post),
      map((post) => ({
        ...post,
        user: this.users.findUser(post?.userId),
      }))
    );
  }

  //
  deletePost(postId: Post['id']): Observable<boolean> {
    return this.api
      .delete<boolean>(`posts/${postId}`)
      .pipe(
        tap(() =>
          this.posts$.next(this.posts$.value.filter(({ id }) => id !== postId))
        )
      );
  }
}
