import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../../shared/models/user.model';
import { UsersService } from '../../shared/services/users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserDetailsComponent implements OnInit {
  user$?: Observable<User>;

  constructor(
    private userService: UsersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // get user details using route parameter
    const userId = this.route.snapshot.params.userId;
    this.user$ = this.userService.getUser(userId);
  }
}
