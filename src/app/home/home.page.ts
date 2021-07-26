import { Component, NgModule } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';
// Importing data service provider
import { DataService } from '../data.service';
// Importing Storage
import { Storage } from '@ionic/storage';
//import { subscribeOn } from 'rxjs/operators'; ???????????? 
// Import Chart ???


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // Coins are of type Object
  coins: Object;
  // Array for liked coins
  likedCoins = [];

  // Added dependency injection DataService & Storage
  constructor(public navCtrl: NavController, private _data: DataService, private storage: Storage, public loadingCtrl: LoadingController) {
    this.storage.remove('likedCoins');

  }

  // Added Angular life cycle hooks - once component and HTML load, execute:
  ngOnInit() {

  }

  ngAfterViewInit() {
    this.refreshCoins();
  }


  // Method for refreshing list of coins
  refreshCoins() {
    this.storage.get('likedCoins').then((val) =>
      console.log(val));
    // If the value is not set, then :  
    if (!val) {
      this.likedCoins.push('BTC', 'ETH', 'IOT'); // Pushes values to array
      this.storage.set('likedCoins', this.likedCoins); // Sets storage
      // Calling data provider 
      this._data.getCoins(this.likedCoins) //liked coins are passed as an argument 
        // Subscribes to array 
        .subscribe(res => {
          this.coins = res;
        })
    }
    // LoadingController.dismiss();
    // If the value is set :
    else {
      this.likedCoins = val;
      this._data.getCoins(this.likedCoins)
        .subscribe(res => {
          this.coins = res;
        })
    }
  }
}
