import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SpotifyService } from '../services/spotify.service';
//import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { SpotifyAuth } from '@ionic-native/spotify-auth';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  public authForm: FormGroup;

  constructor(private formBuilder: FormBuilder, public spotifyService: SpotifyService, public http: HttpClient) { }

  config = {
    clientId: "your-spotify-client-id",
    redirectUrl: "devdacticspotify://callback",
    scopes: ["streaming", "playlist-read-private", "user-read-email", "user-read-private"],
    tokenExchangeUrl: "https://spotifyoauthserver.herokuapp.com/exchange",
    tokenRefreshUrl: "https://spotifyoauthserver.herokuapp.com/refresh",
  };
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
    const scope = "streaming playlist-read-private user-read-email user-read-private"
    const pathUrl = `?response_type=code&client_id=a079c3fd3aa6471db5813440511a67b7&scope=${scope}`
    //http://localhost:8100/auth
    //Call the spotify authorize service
    this.http.get(`https://accounts.spotify.com/authorize${pathUrl}&redirect_uri=spotyApp://callback`)

    // this.nativeStorage.setItem('token', 'test')

  }

  get email() {
    return this.authForm.get('email');
  }

}
