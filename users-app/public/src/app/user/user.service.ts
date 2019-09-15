import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from './user';

import "rxjs";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private _http:HttpClient
  ) { }

  create(user: User){
    return this._http.post("/users", user)
    //.pipe(map((response: any) => response.json()))
    .toPromise()
  }

  destroy(user: User){
    return this._http.delete("/users/"+ user._id)
    //.pipe(map((response: any) => response.json()))
    .toPromise()
  }

  update(user: User){
    return this._http.put("/users/"+ user._id, user)
    //.pipe(map((response: any) => response.json()))
    .toPromise()
  }

  getUsers(){
     return this._http.get<User[]>("/users")
    //.pipe(map((response: any) => response.json()))
    .toPromise()
  }

  getUser(user: User){
    return this._http.get("/users/" + user._id)
    //.pipe(map((response: any) => response.json()))
    .toPromise()
  }
}
