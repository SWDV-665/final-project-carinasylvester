import { Injectable } from '@angular/core';
// Imported http library & headers from Angular Library
import { HttpClient, HttpHeaders } from '@angular/common/http';
// Imported
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // result type any
  result: any;

  // Constructor w/ dependency injection 
  constructor(public _http:HttpClient) { }

// Method for getting cryptocurrency pricing info
// CryptoCompare Multiple Symbols API (personal use)

getCoins() {
  // Getter for CryptoCompare API 
  return this._http.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=USD')
    .pipe(map(result => this.result = result));

}

}