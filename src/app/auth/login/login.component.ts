import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { faUser, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  passwordHidden!: boolean;

  // set the currenr year
  year: number = new Date().getFullYear();

  // Icons
  faUser = faUser;
  faEye = faEye;
  faEyeSlash = faEyeSlash;

  // Password Hide/Show
  toggleText() {
    this.passwordHidden = !this.passwordHidden;
  }

  ngOnInit(): void {
    document.body.classList.add("login-page")
  }

  ngOnDestroy(): void {
    document.body.classList.remove("login-page")
  }
}
