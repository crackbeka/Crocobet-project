import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { UsersRoutingModule } from './users-routing-module';
import { UserItemComponent } from './user-item/user-item.component';
import { UserDetailsComponent } from './user-details/user-details.component';

@NgModule({
  declarations: [UsersComponent, UserItemComponent, UserDetailsComponent],
  imports: [CommonModule, UsersRoutingModule],
})
export class UsersModule {}
