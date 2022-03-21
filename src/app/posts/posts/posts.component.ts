import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit, OnDestroy {
  //
  private subscription?: Subscription;

  //
  posts$ = this.posts.posts$;

  //
  constructor(private posts: PostsService) {}

  //
  ngOnInit(): void {
    this.subscription = this.posts.getPosts().subscribe();
  }

  //
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
