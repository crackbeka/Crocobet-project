import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts/posts.component';
import { PostsRoutingModule } from './posts-routing.module';
import { PostItemComponent } from './post-item/post-item.component';

@NgModule({
  declarations: [PostsComponent, PostItemComponent],
  imports: [CommonModule, PostsRoutingModule],
})
export class PostsModule {}
