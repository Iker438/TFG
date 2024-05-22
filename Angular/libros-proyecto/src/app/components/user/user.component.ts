import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/auht.service';
import { AuthService } from '../../services/user.service';
import { ToastrService } from 'ngx-toastr';
import { User } from '../../model/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User | null = null;

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const currentUser = this.authService.getCurrentUser();
    if (currentUser && currentUser.email) {
      this.userService.getUserByEmail(currentUser.email).subscribe(
        (userData: User[]) => {
          if (userData.length > 0) {
            this.user = userData[0];
          } else {
            this.toastr.error('No se encontró el usuario actual');
          }
        },
        error => {
          this.toastr.error('Error al obtener los datos del usuario');
        }
      );
    } else {
      this.toastr.error('No se pudo obtener el usuario actual');
    }
  }

  editUser(): void {
    this.router.navigate(['/useredit']);
  }
}
