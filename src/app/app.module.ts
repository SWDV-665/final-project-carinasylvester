
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
// Imported Ionic Module
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
//Imported Http Client
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
// Imported HomePage
import { HomePage } from './home/home.page';
// Imported SearchPage
import { SearchPage } from './search/search.page';
// Imported DataService provider
import { DataService } from './data.service';

// Imported Storage module
// import { IonicStorageModule } from '@ionic/storage';

// Imported SplashScreen & StatusBar
//import { SplashScreen } from '@ionic-native/splash-screen/ngx';
//import { StatusBar } from '@ionic-native/status-bar/ngx';
//import { IonicStorageModule } from '@ionic/storage'


@NgModule({
  // Added HomePage, SearchPage declarations
  declarations: [AppComponent],
  // Added HomePage, SearchPage entry components
  entryComponents: [],
  //imports: [BrowserModule, HttpClientModule, IonicStorageModule.forRoot(AppModule),IonicModule.forRoot(), AppRoutingModule],
  imports: [BrowserModule, HttpClientModule,IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule { }
