import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { PelangganService } from 'src/app/services/pelanggan/pelanggan.service';
import { environment } from 'src/environments/environment';
import { KemaskiniDokumenPage } from '../kemaskini-dokumen/kemaskini-dokumen.page';
import { TambahJanaDokumenPage } from '../tambah-jana-dokumen/tambah-jana-dokumen.page';

@Component({
  selector: 'app-jana-dokumen',
  templateUrl: './jana-dokumen.page.html',
  styleUrls: ['./jana-dokumen.page.scss'],
})
export class JanaDokumenPage implements OnInit {


  usahawan_id = window.sessionStorage.getItem("usahawan_id");
  user_id = window.sessionStorage.getItem("user_id");



  constructor(
    public modalController: ModalController,
    private pelangganService: PelangganService,
    private loadingController: LoadingController,
  ) { }

  ngOnInit() {
    this.getPelanggan();
  }

  pelanggan: any


  async tambahDokumen() {
    console.log("Tambah Dokumen");
    const modal = await this.modalController.create({
      component: TambahJanaDokumenPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  async kemaskiniDokumen(pelanggan: any) {
    console.log("kemaskini Dokumen");
    const modal = await this.modalController.create({
      component: KemaskiniDokumenPage,
      componentProps: { pelanggan },
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  async getPelanggan() {

    const loading = await this.loadingController.create({ message: 'Loading ...' });
    loading.present();
    
    this.pelangganService.get(this.user_id).subscribe((res) => {
      console.log("res pelanggan", res);

      this.pelanggan = res;

      loading.dismiss();
    });
  }


  jana_Dokumen(id_pelanggan) {

    console.log(id_pelanggan);

    let formdata = new FormData();

    formdata.append('id_pengguna', this.user_id);

    this.pelangganService.janaDokumen(id_pelanggan, formdata).subscribe((res) => {
      console.log("res3", res);

      let url = environment.baseUrl + 'storage/' + res;

      console.log(url);
      window.open(url, "_blank");


    });
  }

}


