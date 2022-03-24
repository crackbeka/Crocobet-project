import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from 'src/app/shared/services/users.service';
import { Post, PostsService } from '../posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostsComponent implements OnInit {
  posts$?: Observable<Post[]>;

  constructor(
    private route: ActivatedRoute,
    private posts: PostsService,
    private users: UsersService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    const userId = this.route.snapshot.params.userId;

    if (userId) {
      this.posts$ = this.users.getPosts(userId);
    } else {
      this.posts$ = this.posts.getPosts();
    }
  }
}
