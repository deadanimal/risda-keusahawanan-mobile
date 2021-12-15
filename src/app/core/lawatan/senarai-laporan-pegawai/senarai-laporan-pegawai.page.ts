import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TambahLaporanPage } from '../tambah-laporan/tambah-laporan.page';

@Component({
  selector: 'app-senarai-laporan-pegawai',
  templateUrl: './senarai-laporan-pegawai.page.html',
  styleUrls: ['./senarai-laporan-pegawai.page.scss'],
})
export class SenaraiLaporanPegawaiPage implements OnInit {

  constructor(
    public modalController: ModalController,
  ) { }

  ngOnInit() {
  }


  async tambahLaporan(laporan) {
    console.log("pengesahan lawatan");
    const modal = await this.modalController.create({
      component: TambahLaporanPage,
      componentProps: { laporan },
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
}
