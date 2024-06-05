import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { RegistrationPage } from './registration/registration.page';
import { LoginPage } from './login/login.page';

const firebaseConfig = {
  apiKey: "AIzaSyCjAROuAcp2wimWfSsYIEglxcceZArxxjE",
  authDomain: "apping-1c373.firebaseapp.com",
  projectId: "apping-1c373",
  storageBucket: "apping-1c373.appspot.com",
  messagingSenderId: "242067860949",
  appId: "1:242067860949:web:a7a96d8dfc8fa3c2cae15c"
};

@NgModule({
  declarations: [
    AppComponent,
    RegistrationPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth())
],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
