import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { user } from './user';


@Injectable({
  providedIn: 'root'
})
export class userService {


 
  private baseURL = "http://localhost:8086/api/v1/users";

  constructor(private httpClient: HttpClient) { }
  
  getusersList(): Observable<user[]>{
    return this.httpClient.get<user[]>(`${this.baseURL}`);
  }

  adduser(user: user): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, user);
  }

  getuserById(id: number): Observable<user>{
    return this.httpClient.get<user>(`${this.baseURL}/${id}`);
  }


  updateuser(id: number, user: user): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, user);
  }

  deleteuser(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }


}
