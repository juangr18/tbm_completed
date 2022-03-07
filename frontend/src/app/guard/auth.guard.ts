import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
<<<<<<< HEAD
  constructor(private _userSevice: UserService, private _router: Router) {}

  canActivate(): boolean {
    if (!this._userSevice.loggedIn()) {
      this._router.navigate(["/login"])
=======
  constructor(private _userService: UserService, private _router: Router) {}

  canActivate(): boolean {
    if (!this._userService.loggedIn()) {
      this._router.navigate(['/login']);
>>>>>>> 476615d02714b70ffd911873d4ba0dd8150044ec
      return false;
    } else {
      return true;
    }
  }
}
