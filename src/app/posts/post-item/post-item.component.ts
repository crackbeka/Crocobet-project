import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Post, PostsService } from '../posts.service';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostItemComponent {
  //
  @Input() post?: Post;

  //
  actionsOpen = false;

  //
  constructor(private posts: PostsService) {}

  //
  deletePost() {
    this.posts.deletePost(this.post!.id).subscribe();
  }
}
