import { NgModule } from "@angular/core";
import { FileDownloadModalComponent } from "./file-download-modal.component";
import { IonicModule } from "@ionic/angular";
import { CommonModule } from "@angular/common";
import { File } from "@ionic-native/file/ngx";
import { HTTP } from "@ionic-native/http/ngx";
import { LocalNotifications } from "@awesome-cordova-plugins/local-notifications/ngx";
// import { LocalNotifications } from "@awesome-cordova-plugins/local-notifications/ngx";
import { FileOpener } from "@awesome-cordova-plugins/file-opener/ngx";
import { AndroidPermissions } from "@ionic-native/android-permissions/ngx";

@NgModule({
  declarations: [FileDownloadModalComponent],
  imports: [CommonModule, IonicModule,],
  exports: [FileDownloadModalComponent],
  providers: [File, HTTP, LocalNotifications, FileOpener, AndroidPermissions],
})
export class FileDownloadModalModule { }
