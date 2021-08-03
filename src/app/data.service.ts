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
  constructor(public _http: HttpClient) {

  }

  // Method for getting cryptocurrency pricing info
  // CryptoCompare Multiple Symbols API (personal use)

  // Getter for CryptoCompare Multiple Symbols Price API 

  // Passing in arguments for user's preferred coins
  getCoins(coins) {
    let coinlist = ' ';
    coinlist = coins.join();
    // Coin list passed in 
    return this._http.get('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=' + coinlist + '&tsyms=USD')
      .pipe(map(result => this.result = result));

  }
  // 
  getCoin(coin) {
    return this._http.get("https://min-api.cryptocompare.com/data/pricemultifull?fsyms=" + coin + "&tsyms=USD")
      .pipe(map(result => this.result = result));

  }
  // API call that gets historical data
  getChart(coin) {

    return this._http.get("https://min-api.cryptocompare.com/data/v2/histoday?fsym=" + coin + "&tsym=USD&limit=30&aggregate=1")
      .pipe(map(result => this.result = result));

  }

  allCoins() {
    //let headers = new HttpHeaders()
    //.set("Access-Control-Allow-Origin","*");
    // return this._http.get("https://min-api.cryptocompare.com/data/all/coinlist",{headers:headers})
    return this._http.get("https://min-api.cryptocompare.com/data/all/coinlist")
      .pipe(map(result => this.result = result));
  }
}




