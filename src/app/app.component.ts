import { Component, OnInit } from '@angular/core';
import { UsersService } from './shared/services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    // pre-fetch users to use them later in posts
    this.userService.getUsers().subscribe();
  }
}
