import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor( private httpClient:HttpClient,private _router:Router) { }
  registerUsingAPI(user:User){
    console.log("from the service")
    console.log(user);
    console.log("--------------")
    return this.httpClient.post("http://localhost:31453/api/User",user); 
  }
  loginUsingAPI(user:User){
    console.log("from the service")
    console.log(user);
    console.log("--------------")
    return this.httpClient.post("http://localhost:31453/api/User/Login",user); 
  }
  loggedIn() {
    return !!localStorage.getItem('token')    
  }
  logoutUser() {
    localStorage.removeItem('token')
    this._router.navigate(['/login'])
  }
}

