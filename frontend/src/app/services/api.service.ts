import { Injectable } from '@angular/core';
import * as AppConfigurations from "../app.config";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  base_url = AppConfigurations.BACKEND_API;

  constructor(private http: HttpClient) {

  }
}
