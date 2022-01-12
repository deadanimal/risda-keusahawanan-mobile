import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { map } from 'rxjs/operators';
import { LawatanService } from 'src/app/services/lawatan/lawatan.service';
import { environment } from 'src/environments/environment';
import { PengesahanTarikhLawatanPgwPage } from '../pengesahan-tarikh-lawatan-pgw/pengesahan-tarikh-lawatan-pgw.page';
// import { FileTransfer, FileUploadOptions, FileTransferObject } from '@awesome-cordova-plugins/file-transfer/ngx';
// import { File } from '@awesome-cordova-plugins/file';
import { HTTP } from '@ionic-native/http/ngx';
import { File } from '@ionic-native/file/ngx';
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-lawatan-usahawan',
  templateUrl: './lawatan-usahawan.page.html',
  styleUrls: ['./lawatan-usahawan.page.scss'],
})
export class LawatanUsahawanPage implements OnInit {


  user_id = window.sessionStorage.getItem("user_id");
  lawatan: any;
  laporan: any;

  constructor(
    public modalController: ModalController,
    private lawatanService: LawatanService,
    private http: HTTP,
    private file: File

  ) { }

  ngOnInit() {
    this.getLawatan();
  }

  async pengesahanLawatan(lawatan) {
    console.log("pengesahan lawatan");
    const modal = await this.modalController.create({
      component: PengesahanTarikhLawatanPgwPage,
      componentProps: { lawatan },
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  getLawatan() {

    this.lawatanService.getLawatanUsahawan(this.user_id).pipe(map(x => x.filter(i => i.status_lawatan != "4"))).subscribe((res) => {
      console.log("res", res);

      this.lawatan = res;
      // window.location.reload();
    });

    this.lawatanService.getLawatanUsahawan(this.user_id).pipe(map(x => x.filter(i => i.status_lawatan == "4"))).subscribe((res) => {
      console.log("res2", res);

      this.laporan = res;
      // window.location.reload();
      // this.lawatan
    });

  }

  // const fileTransfer: FileTransferObject = this.transfer.create();
  download_laporan(id) {

    console.log(id);
    this.lawatanService.janaLaporan(id).subscribe((res) => {
      console.log("res3", res);


      const filePath = this.file.dataDirectory + 'laporan-lawatan';
      // for iOS use this.file.documentsDirectory

      this.http.downloadFile('http://127.0.0.1:8000/storage/laporan_lawatan/laporan%20lawatan%20user1.pdf', {}, {}, filePath).then(response => {
        // prints 200
        console.log('success block...', response);
      }).catch(err => {
        // prints 403
        console.log('error block ... ', err.status);
        // prints Permission denied
        console.log('error block ... ', err.error);
      })


    });
  }

  private downloadFileAndStore() {
    //

  }

}
