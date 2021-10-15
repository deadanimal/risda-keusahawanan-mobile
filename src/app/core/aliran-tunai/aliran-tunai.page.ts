import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TambahTunaiMasukPage } from '../modal/tambah-tunai-masuk/tambah-tunai-masuk.page';

@Component({
  selector: 'app-aliran-tunai',
  templateUrl: './aliran-tunai.page.html',
  styleUrls: ['./aliran-tunai.page.scss'],
})
export class AliranTunaiPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  tunai_masuk = [
    { kategori: "Jualan Perolehan", keterangan:"keterangan1", jumlah: 100, tarikh: "10/10/21" },
    { kategori: "Deposit Jualan", keterangan:"keterangan2", jumlah: 200, tarikh: "10/10/21" },
    { kategori: "Pulangan Belian", keterangan:"keterangan3", jumlah: 300, tarikh: "10/10/21" },
    { kategori: "Stok Akhir", keterangan:"keterangan4", jumlah: 200, tarikh: "10/10/21" },
    { kategori: "Hasil Sewaan", keterangan:"keterangan5", jumlah: 200, tarikh: "10/10/21" },
    { kategori: "Hasil Dividen", keterangan:"keterangan6", jumlah: 250, tarikh: "10/10/21" },
    { kategori: "Hasil Komisen", keterangan:"keterangan7", jumlah: 250, tarikh: "10/10/21" },
    { kategori: "Hasil Lain", keterangan:"keterangan8", jumlah: 250, tarikh: "10/10/21" },
    { kategori: "Deposit Jualan", keterangan:"keterangan9", jumlah: 250, tarikh: "10/10/21" },
    { kategori: "Pulangan Belian", keterangan:"keterangan0", jumlah: 250, tarikh: "10/10/21" },
  ]

  async presentModal() {
    console.log("click");
    const modal = await this.modalController.create({
      component: TambahTunaiMasukPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

}
