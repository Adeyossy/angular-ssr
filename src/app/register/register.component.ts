import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';
import { UserCredential } from 'firebase/auth';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  email = '';
  password = '';
  userCredential$ = new Observable<UserCredential>();

  constructor(private authService: AuthService) { }

  signUp() {
    this.userCredential$ = this.authService.signUp$(this.email, this.password);
  }
}
