import { Component, NgModule } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';
// Importing data service provider
import { DataService } from '../data.service';
// Importing Storage
import { Storage } from '@ionic/storage';
//import { subscribeOn } from 'rxjs/operators'; ???????????? 
import { Chart } from 'chart.js';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  detailToggle = []; // array
  likedCoins = []; // array
  objectKeys = Object.keys;
  coins: Object;
  details: Object;
  chart = []; // array

  constructor(public navCtrl: NavController, private _data: DataService, private storage: Storage, public loadingCtrl: LoadingController) {
    this.storage.remove('likedCoins');

  }


  ionViewDidEnter() {

  }

  ionViewWillEnter() {

    this.refreshCoins();
  }

  async refreshCoins() {

    const loader = await this.loadingCtrl.create({

      message: 'Refreshing..',
      spinner: 'bubbles'
    });

    await loader.present().then(() => {

      this.storage.get('likedCoins').then((val) => {
        console.log(val);

        //if the value is not set, then
        if (!val) {

          this.likedCoins.push('BTC', 'ETH', 'ADA');
          this.storage.set('likedCoins', this.likedCoins);
          this._data.getCoins(this.likedCoins)
            .subscribe(res => {
              this.coins = res;
              loader.dismiss();

            })
        }

        // otherwise ...
        else {

          this.likedCoins = val;

          this._data.getCoins(this.likedCoins)

            .subscribe(res => {

              this.coins = res;
              loader.dismiss();
            })
        }
      });

    });
  }
  coinDetails(coin: any, index: any) {
    // If it is clicked after it has already been clicked -> false
    if (this.detailToggle[index])
      this.detailToggle[index] = false;
    else {
      // Only one detail can be toggled at a time
      this.detailToggle.fill(false);
    }
  }
}