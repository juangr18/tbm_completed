import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(public _userService: UserService, private _router: Router) {}

<<<<<<< HEAD
  logout() {
    this._userService.logout();
    this._router.navigate(['/']);
  }

  ngOnInit(): void {}
=======
  ngOnInit(): void {}

  logout() {
    this._userService.logout();
    this._router.navigate(['/login']);
  }
>>>>>>> 476615d02714b70ffd911873d4ba0dd8150044ec
}
