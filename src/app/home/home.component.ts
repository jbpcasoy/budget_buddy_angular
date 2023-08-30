import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private router: Router) {}

  onLogin = () => {
    const redirectUrl = window.location.protocol + '//' + window.location.host;

    window.location.href = `${environment.apiUrl}/auth/google?redirect_url=${redirectUrl}`;
  };
}
