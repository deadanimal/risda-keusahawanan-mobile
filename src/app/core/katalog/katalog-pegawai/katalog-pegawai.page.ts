import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { KatalogService } from 'src/app/services/katalog/katalog.service';
import { MaklumatProdukPage } from '../maklumat-produk/maklumat-produk.page';

@Component({
  selector: 'app-katalog-pegawai',
  templateUrl: './katalog-pegawai.page.html',
  styleUrls: ['./katalog-pegawai.page.scss'],
})
export class KatalogPegawaiPage implements OnInit {

  user_id = window.sessionStorage.getItem("user_id");

  katalog = [
    { nama_produk: "Gaming Chair", status_katalog: "publish", created_date: "12/12/2021" },
    { nama_produk: "Maja study", status_katalog: "publish", created_date: "1/2/2020" },
    { nama_produk: "keyboard", status_katalog: "pending", created_date: "5/10/2021" },
    { nama_produk: "imac", status_katalog: "pending", created_date: "22/6/2020" },
    { nama_produk: "monitor", status_katalog: "publish", created_date: "3/2/2020" },
    { nama_produk: "Gaming Chair", status_katalog: "publish", created_date: "12/12/2021" },
    { nama_produk: "Maja study", status_katalog: "publish", created_date: "1/2/2020" },
    { nama_produk: "keyboard", status_katalog: "pending", created_date: "5/10/2021" },
    { nama_produk: "imac", status_katalog: "pending", created_date: "22/6/2020" },
    { nama_produk: "monitor", status_katalog: "publish", created_date: "3/2/2020" },
    { nama_produk: "Gaming Chair", status_katalog: "publish", created_date: "12/12/2021" },
    { nama_produk: "Maja study", status_katalog: "publish", created_date: "1/2/2020" },
    { nama_produk: "keyboard", status_katalog: "pending", created_date: "5/10/2021" },
    { nama_produk: "imac", status_katalog: "pending", created_date: "22/6/2020" },
    { nama_produk: "monitor", status_katalog: "publish", created_date: "3/2/2020" },
  ]

  constructor(
    public modalController: ModalController,
    private katalogService: KatalogService,
  ) { }

  ngOnInit() {
  }

  async lihatKatalog() {
    console.log("kemaskini Katalog");
    const modal = await this.modalController.create({
      component: MaklumatProdukPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

}
