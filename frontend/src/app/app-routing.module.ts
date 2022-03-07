import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListRoleComponent } from './admin/list-role/list-role.component';
import { ListUserComponent } from './admin/list-user/list-user.component';
import { RegisterRoleComponent } from './admin/register-role/register-role.component';
import { RegisterUserComponent } from './admin/register-user/register-user.component';
import { UpdateRoleComponent } from './admin/update-role/update-role.component';
import { UpdateUserComponent } from './admin/update-user/update-user.component';
import { ListTaskComponent } from './board/list-task/list-task.component';
import { SaveTaskComponent } from './board/save-task/save-task.component';
import { LoginComponent } from './home/login/login.component';
import { RegisterComponent } from './home/register/register.component';
import { AuthGuard } from "./guard/auth.guard";

import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'listTask',
    component: ListTaskComponent,
<<<<<<< HEAD
    canActivate:[AuthGuard]
=======
    canActivate: [AuthGuard],
>>>>>>> 476615d02714b70ffd911873d4ba0dd8150044ec
  },
  {
    path: 'saveTask',
    component: SaveTaskComponent,
<<<<<<< HEAD
    canActivate:[AuthGuard]
=======
    canActivate: [AuthGuard],
>>>>>>> 476615d02714b70ffd911873d4ba0dd8150044ec
  },
  {
    path: 'signUp',
    component: RegisterComponent,
  },
  {
    path: 'registerUser',
    component: RegisterUserComponent,
<<<<<<< HEAD
    canActivate:[AuthGuard]
=======
    canActivate: [AuthGuard],
>>>>>>> 476615d02714b70ffd911873d4ba0dd8150044ec
  },
  {
    path: 'listUser',
    component: ListUserComponent,
<<<<<<< HEAD
    canActivate:[AuthGuard]
=======
    canActivate: [AuthGuard],
>>>>>>> 476615d02714b70ffd911873d4ba0dd8150044ec
  },
  {
    path: 'updateUser',
    component: UpdateUserComponent,
<<<<<<< HEAD
    canActivate:[AuthGuard]
=======
    canActivate: [AuthGuard],
>>>>>>> 476615d02714b70ffd911873d4ba0dd8150044ec
  },
  {
    path: 'registerRole',
    component: RegisterRoleComponent,
<<<<<<< HEAD
    canActivate:[AuthGuard]
=======
    canActivate: [AuthGuard],
>>>>>>> 476615d02714b70ffd911873d4ba0dd8150044ec
  },
  {
    path: 'listRole',
    component: ListRoleComponent,
<<<<<<< HEAD
    canActivate:[AuthGuard]
=======
    canActivate: [AuthGuard],
>>>>>>> 476615d02714b70ffd911873d4ba0dd8150044ec
  },
  {
    path: 'updateRole',
    component: UpdateRoleComponent,
<<<<<<< HEAD
    canActivate:[AuthGuard]
=======
    canActivate: [AuthGuard],
>>>>>>> 476615d02714b70ffd911873d4ba0dd8150044ec
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
