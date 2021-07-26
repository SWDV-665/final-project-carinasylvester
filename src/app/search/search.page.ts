// Imported life cycle components
import { Component, OnInit } from '@angular/core';
// Imported data service
import { DataService } from '../data.service';
// Imported Storage
import { Storage } from '@ionic/storage';
// Imported LoadingController, NavController, NavParams 
import { LoadingController, NavController, NavParams} from '@ionic/angular';


@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
