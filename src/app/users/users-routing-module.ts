import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
  },
  { path: ':userId', component: UserDetailsComponent },
  {
    path: ':userId/posts',
    loadChildren: () =>
      import('../posts/posts.module').then((m) => m.PostsModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
