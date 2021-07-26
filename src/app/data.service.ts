import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public _http: HttpClient) { }

  }

//
  getCoins() {
    return this.http.get('')
  }

