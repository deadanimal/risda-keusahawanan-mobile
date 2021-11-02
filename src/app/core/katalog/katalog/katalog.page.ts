import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { KemaskiniKatalogPage } from '../kemaskini-katalog/kemaskini-katalog.page';
import { TambahKatalogPage } from '../tambah-katalog/tambah-katalog.page';

@Component({
  selector: 'app-katalog',
  templateUrl: './katalog.page.html',
  styleUrls: ['./katalog.page.scss'],
})
export class KatalogPage implements OnInit {

  constructor(
    public modalController: ModalController,
  ) { }

  ngOnInit() {
  }

  katalog = [
    { nama_produk: "Gaming Chair", status_katalog: "publish", created_date:"12/12/2021"},
    { nama_produk: "Maja study", status_katalog: "draft", created_date:"1/2/2020"},
    { nama_produk: "keyboard", status_katalog: "pending", created_date:"5/10/2021"},
    { nama_produk: "imac", status_katalog: "pending", created_date:"22/6/2020"},
    { nama_produk: "monitor", status_katalog: "publish", created_date:"3/2/2020"},
    { nama_produk: "Gaming Chair", status_katalog: "publish", created_date:"12/12/2021"},
    { nama_produk: "Maja study", status_katalog: "draft", created_date:"1/2/2020"},
    { nama_produk: "keyboard", status_katalog: "pending", created_date:"5/10/2021"},
    { nama_produk: "imac", status_katalog: "pending", created_date:"22/6/2020"},
    { nama_produk: "monitor", status_katalog: "publish", created_date:"3/2/2020"},
    { nama_produk: "Gaming Chair", status_katalog: "publish", created_date:"12/12/2021"},
    { nama_produk: "Maja study", status_katalog: "draft", created_date:"1/2/2020"},
    { nama_produk: "keyboard", status_katalog: "pending", created_date:"5/10/2021"},
    { nama_produk: "imac", status_katalog: "pending", created_date:"22/6/2020"},
    { nama_produk: "monitor", status_katalog: "publish", created_date:"3/2/2020"},
  ]

  // tambahKatalog(){
  //   console.log("tambah")
  // }

  async tambahKatalog() {
    console.log("tambah Katalog");
    const modal = await this.modalController.create({
      component: TambahKatalogPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  async kemaskiniKatalog() {
    console.log("kemaskini Katalog");
    const modal = await this.modalController.create({
      component: KemaskiniKatalogPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

}
