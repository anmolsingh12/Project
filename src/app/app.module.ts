import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgetComponent } from './sign-in/forget/forget.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'signIn', component: SignInComponent},
  { path: 'signUp', component: SignUpComponent},
  { path: 'forgetPassword', component: ForgetComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignInComponent,
    HomeComponent,
    SignUpComponent,
    ForgetComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
