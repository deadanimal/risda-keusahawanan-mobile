import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { KemaskiniDokumenPage } from '../kemaskini-dokumen/kemaskini-dokumen.page';
import { TambahJanaDokumenPage } from '../tambah-jana-dokumen/tambah-jana-dokumen.page';

@Component({
  selector: 'app-jana-dokumen',
  templateUrl: './jana-dokumen.page.html',
  styleUrls: ['./jana-dokumen.page.scss'],
})
export class JanaDokumenPage implements OnInit {

  constructor(public modalController: ModalController,) { }

  ngOnInit() {
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


  async tambahDokumen() {
    console.log("Tambah Dokumen");
    const modal = await this.modalController.create({
      component: TambahJanaDokumenPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  async kemaskiniDokumen() {
    console.log("kemaskini Dokumen");
    const modal = await this.modalController.create({
      component: KemaskiniDokumenPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

}


