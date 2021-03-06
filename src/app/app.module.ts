import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';

import {TabsPage} from '../pages/tabs/tabs';
import {MyDishesPage} from "../pages/my-dishes/my-dishes";
import {MyPlacesPage} from "../pages/my-places/my-places";
import {AllDishesPage} from "../pages/all-dishes/all-dishes";

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {LoginPageModule} from "../pages/login/login.module";
import { AuthService } from '../providers/auth-service/auth-service';
import {HttpClientModule} from "@angular/common/http";
import {LoginNetworksPageModule} from "../pages/login-networks/login-networks.module";

import { Facebook } from '@ionic-native/facebook';
import {GooglePlus} from "@ionic-native/google-plus";
import {ProfilePage} from "../pages/profile/profile";
import {DiscoverPage} from "../pages/discover/discover";


@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    DiscoverPage,
    MyPlacesPage,
    MyDishesPage,
    AllDishesPage,
    ProfilePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    LoginPageModule,
    LoginNetworksPageModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    DiscoverPage,
    MyPlacesPage,
    MyDishesPage,
    ProfilePage,
    AllDishesPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    Facebook,
    GooglePlus
  ]
})
export class AppModule {
}
