import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/models/user.model';
import { ApiService } from 'src/app/shared/services/api.service';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  @Input() users!: User[];
  users$?: Observable<User[]>;
  constructor(private api: ApiService, private userService: UsersService) {}

  ngOnInit(): void {
    this.users$ = this.userService.getUsers();
  }
}
