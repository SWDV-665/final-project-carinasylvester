import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
// Importing data service provider
import { DataService } from '../data.service';
// Importing Angular N
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
// Added dependency injection 
  constructor(public navCtrl: NavController, private _data: DataService) {

  }
  
// Added life cycle hook
  ngOnInit() {
    this._data.getCoins()
      .subscribe(result => {
        console.log(result);
      });
      }
  }
