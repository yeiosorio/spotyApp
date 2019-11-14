import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  registerCredentials = { email: '', password: '' };
	loading: any;
	remember: any;
  constructor() { }

  ngOnInit() {
  }

}
