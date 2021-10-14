import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  [x: string]: any;

  constructor(private http: HttpClient) { }

  public doRegistration (employee:any) {

    return this.http.post("http://local:8080/insert",employee, {responseType: "text" as "json"});
  }
  

}

