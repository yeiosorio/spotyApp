import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { SpotifyService } from '../services/spotify.service';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  public authForm: FormGroup;

  constructor(private formBuilder: FormBuilder, public spotifyService: SpotifyService) { }

  ngOnInit() {
    this.createForm();

  }

  /**
   * @desc function that create form and asociate it to the object [spotifyCredentials] for credentials validate 
   * */
  createForm (){

    this.authForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

   /**
   * @desc function that authorize the spotify user account
   * */
  public authorizeAccount(){
    console.log(this.authForm.value)
    //Call the spotify authorize service

  }

  get email() {
    return this.authForm.get('email');
  }

}
