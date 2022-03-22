import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { UserPosts, UserPostsService } from './user-posts.service';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css'],
})
export class UserPostsComponent implements OnInit {
  userPost!: UserPosts;
  constructor(private api: ApiService, private userPosts: UserPostsService) {}

  ngOnInit(): void {
    // this.userPost = this.userPosts.getUserPosts();
  }
}
