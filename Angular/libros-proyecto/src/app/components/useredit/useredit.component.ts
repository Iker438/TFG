import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/auht.service';
import { AuthService } from '../../services/user.service';
import { ToastrService } from 'ngx-toastr';
import { User} from '../../model/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-useredit',
  templateUrl: './useredit.component.html',
  styleUrls: ['./useredit.component.css']
})
export class UsereditComponent implements OnInit {
  user: User = {
    id: 0,
    username: '',
    role: '',
    email: '',
    phone: '',
    image: ''
  };

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

  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.user.image = reader.result as string;
        this.authService.setUserImage(this.user.image); // Update image in AuthService
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit(): void {
    this.userService.updateUser(this.user).subscribe(
      response => {
        this.toastr.success('Usuario actualizado con éxito');
      },
      error => {
        this.toastr.error('Hubo un error al actualizar el usuario');
      });      
      this.router.navigate(['/user']);
  }
}
