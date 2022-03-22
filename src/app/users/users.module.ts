import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { UsersRoutingModule } from './users-routing-module';
import { UserItemComponent } from './user-item/user-item.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserPostsComponent } from './user-posts/user-posts.component';

@NgModule({
  declarations: [UsersComponent, UserItemComponent, UserDetailsComponent, UserPostsComponent],
  imports: [CommonModule, UsersRoutingModule],
})
export class UsersModule {}
