import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { LoginService } from './services/login/login.service';

import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { Camera } from '@ionic-native/camera';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';


// geolocation and native-geocoder
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
// import { NativeStorage } from '@ionic-native/native-storage';
// import { NativeStorage } from '@ionic-native/native-storage';
import { IonicStorageModule } from '@ionic/storage-angular';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    IonicStorageModule.forRoot()

  ],
  providers: [
    StatusBar,
    SplashScreen,
    // // { provide: ErrorHandler, useClass: IonicErrorHandler },
    // FileTransfer,
    // // FileUploadOptions,
    // FileTransferObject,
    // File,
    // Camera,
  
    {
      provide: RouteReuseStrategy,
      useClass: IonicRouteStrategy,

    },
    LoginService, // <-- List providers here
    HttpClientModule,
    Geolocation,
    NativeGeocoder,
    { 
      provide: RouteReuseStrategy, 
      useClass: IonicRouteStrategy
    }

  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
