import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { faAngleDown, faUser, faWrench, faPowerOff } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor ( private router: Router ) {}

  faAngleDown = faAngleDown;
  faUser = faUser;
  faWrench = faWrench;
  faPowerOff = faPowerOff;

  ngOnInit(): void {

  }

  logout() {
    this.router.navigate(['/auth/login']);
  }
}
