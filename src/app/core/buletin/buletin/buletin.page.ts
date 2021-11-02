import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { KemaskiniBuletinPage } from '../kemaskini-buletin/kemaskini-buletin.page';
import { TambahBuletinPage } from '../tambah-buletin/tambah-buletin.page';

@Component({
  selector: 'app-buletin',
  templateUrl: './buletin.page.html',
  styleUrls: ['./buletin.page.scss'],
})
export class BuletinPage implements OnInit {

  constructor(public modalController: ModalController,) { }

  ngOnInit() {
  }

  katalog = [
    { nama_produk: "Tajuk Buletin", status_katalog: "publish", created_date:"12/12/2021"},
    { nama_produk: "Tajuk Buletin", status_katalog: "publish", created_date:"1/2/2020"},
    { nama_produk: "Tajuk Buletin", status_katalog: "pending", created_date:"5/10/2021"},
    { nama_produk: "Tajuk Buletin", status_katalog: "pending", created_date:"22/6/2020"},
    { nama_produk: "Tajuk Buletin", status_katalog: "publish", created_date:"3/2/2020"},
    { nama_produk: "Tajuk Buletin", status_katalog: "publish", created_date:"12/12/2021"},
    { nama_produk: "Tajuk Buletin ", status_katalog: "publish", created_date:"1/2/2020"},
    { nama_produk: "Tajuk Buletin", status_katalog: "pending", created_date:"5/10/2021"},
    { nama_produk: "Tajuk Buletin", status_katalog: "pending", created_date:"22/6/2020"},
    { nama_produk: "Tajuk Buletin", status_katalog: "publish", created_date:"3/2/2020"},
    { nama_produk: "Tajuk Buletin ", status_katalog: "publish", created_date:"12/12/2021"},
    { nama_produk: "Tajuk Buletin", status_katalog: "publish", created_date:"1/2/2020"},
    { nama_produk: "Tajuk Buletin", status_katalog: "pending", created_date:"5/10/2021"},
    { nama_produk: "Tajuk Buletin", status_katalog: "pending", created_date:"22/6/2020"},
    { nama_produk: "Tajuk Buletin", status_katalog: "publish", created_date:"3/2/2020"},
  ]

  async tambahBuletin() {
    console.log("Tambah Dokumen");
    const modal = await this.modalController.create({
      component: TambahBuletinPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  async kemaskiniBuletin() {
    console.log("Tambah Dokumen");
    const modal = await this.modalController.create({
      component: KemaskiniBuletinPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

}
