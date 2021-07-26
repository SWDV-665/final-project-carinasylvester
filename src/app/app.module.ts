
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
//Imported Http Client
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
// Imported HomePage
import { HomePage} from './home/home.page';
// Imported SearchPage
import { SearchPage} from './search/search.page';
// Imported DataService provider
import { DataService } from './data.service';
// Imported SplashScreen & StatusBar
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';



@NgModule({
  // Added HomePage, SearchPage declarations
  declarations: [AppComponent],
  // Added HomePage, SearchPage entry components
  entryComponents: [],
  imports: [BrowserModule, HttpClientModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
