import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PengesahanTarikhLawatanPgwPageModule } from '../pengesahan-tarikh-lawatan-pgw/pengesahan-tarikh-lawatan-pgw.module';
import { PengesahanTarikhLawatanPgwPage } from '../pengesahan-tarikh-lawatan-pgw/pengesahan-tarikh-lawatan-pgw.page';
import { TambahLaporanPage } from '../tambah-laporan/tambah-laporan.page';
import { TarikhLawatanPgwPage } from '../tarikh-lawatan-pgw/tarikh-lawatan-pgw.page';

@Component({
  selector: 'app-lawatan-pegawai',
  templateUrl: './lawatan-pegawai.page.html',
  styleUrls: ['./lawatan-pegawai.page.scss'],
})
export class LawatanPegawaiPage implements OnInit {

  constructor(public modalController: ModalController,) { }

  ngOnInit() {
  }

  katalog = [
    { nama_produk: "Nama Usahawan", status_katalog: "publish", created_date:"12/12/2021"},
    { nama_produk: "Nama Usahawan", status_katalog: "draft", created_date:"1/2/2020"},
    { nama_produk: "Nama Usahawan", status_katalog: "pending", created_date:"5/10/2021"},
    { nama_produk: "Nama Usahawan", status_katalog: "pending", created_date:"22/6/2020"},
    { nama_produk: "Nama Usahawan", status_katalog: "publish", created_date:"3/2/2020"},
    { nama_produk: "Nama Usahawan", status_katalog: "publish", created_date:"12/12/2021"},
    { nama_produk: "Nama Usahawan", status_katalog: "draft", created_date:"1/2/2020"},
    { nama_produk: "Nama Usahawan", status_katalog: "pending", created_date:"5/10/2021"},
    { nama_produk: "Nama Usahawan", status_katalog: "pending", created_date:"22/6/2020"},
    { nama_produk: "Nama Usahawan", status_katalog: "publish", created_date:"3/2/2020"},
    { nama_produk: "Nama Usahawan", status_katalog: "publish", created_date:"12/12/2021"},
    { nama_produk: "Nama Usahawan", status_katalog: "draft", created_date:"1/2/2020"},
    { nama_produk: "Nama Usahawan", status_katalog: "pending", created_date:"5/10/2021"},
    { nama_produk: "Nama Usahawan", status_katalog: "pending", created_date:"22/6/2020"},
    { nama_produk: "Nama Usahawan", status_katalog: "publish", created_date:"3/2/2020"},
  ]

  async addLawatan() {
    console.log("tambah lawatan");
    const modal = await this.modalController.create({
      component: TarikhLawatanPgwPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  async pengesahanLawatan() {
    console.log("pengesahan lawatan");
    const modal = await this.modalController.create({
      component: PengesahanTarikhLawatanPgwPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  pelanggan = [
    { nama_pelanggan: "Kamal", status_katalog: "publish", created_date: "12/12/2021" },
    { nama_pelanggan: "amin", status_katalog: "draft", created_date: "1/2/2020" },
    { nama_pelanggan: "zainur", status_katalog: "pending", created_date: "5/10/2021" },
    { nama_pelanggan: "amir", status_katalog: "pending", created_date: "22/6/2020" },
    { nama_pelanggan: "azri", status_katalog: "publish", created_date: "3/2/2020" },
    { nama_pelanggan: "niena", status_katalog: "publish", created_date: "12/12/2021" },
    { nama_pelanggan: "tasha", status_katalog: "draft", created_date: "1/2/2020" },
    { nama_pelanggan: "umie", status_katalog: "pending", created_date: "5/10/2021" },
    { nama_pelanggan: "boi", status_katalog: "pending", created_date: "22/6/2020" },
    { nama_pelanggan: "afiq", status_katalog: "publish", created_date: "3/2/2020" },
    { nama_pelanggan: "Alya", status_katalog: "publish", created_date: "12/12/2021" },
    { nama_pelanggan: "zainoor", status_katalog: "draft", created_date: "1/2/2020" },
    { nama_pelanggan: "hadi", status_katalog: "pending", created_date: "5/10/2021" },
    { nama_pelanggan: "ali", status_katalog: "pending", created_date: "22/6/2020" },
    { nama_pelanggan: "jemah", status_katalog: "publish", created_date: "3/2/2020" },
  ]

  async tambahLawatan() {
    console.log("pengesahan lawatan");
    const modal = await this.modalController.create({
      component: TambahLaporanPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

}
