import { Injectable } from '@angular/core';
import { map, startWith, tap } from 'rxjs/operators';
import { Post } from 'src/app/posts/posts.service';
import { ApiService } from 'src/app/shared/services/api.service';

export interface UserPosts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserPostsService {
  constructor(private api: ApiService) {}

  // getUserPosts(id: UserPosts['id']) {
  //   return this.api.get(`users/${id}/posts`);
  // }
}
