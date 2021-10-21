import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { KemaskiniTunaiKeluarPage } from '../modal/kemaskini-tunai-keluar/kemaskini-tunai-keluar.page';
import { KemaskiniTunaiMasukPage } from '../modal/kemaskini-tunai-masuk/kemaskini-tunai-masuk.page';
import { TambahTunaiKeluarPage } from '../modal/tambah-tunai-keluar/tambah-tunai-keluar.page';
import { TambahTunaiMasukPage } from '../modal/tambah-tunai-masuk/tambah-tunai-masuk.page';
import { AliranService } from 'src/app/services/Aliran/aliran.service';
@Component({
  selector: 'app-aliran-tunai',
  templateUrl: './aliran-tunai.page.html',
  styleUrls: ['./aliran-tunai.page.scss'],
})
export class AliranTunaiPage implements OnInit {

  tunai_masuk: any;
  tunai_keluar: any;

  usahawan_id = window.sessionStorage.getItem("usahawan_id");
  user_id = window.sessionStorage.getItem("user_id");

  constructor(
    public modalController: ModalController,
    private aliranService: AliranService
  ) { }

  ngOnInit() {
    this.getAliran()
  }

  // tunai_masuk = [
  //   { kategori: "Jualan Perolehan", keterangan:"keterangan1", jumlah: 100, tarikh: "10/10/21" },
  //   { kategori: "Deposit Jualan", keterangan:"keterangan2", jumlah: 200, tarikh: "10/10/21" },
  //   { kategori: "Pulangan Belian", keterangan:"keterangan3", jumlah: 300, tarikh: "10/10/21" },
  //   { kategori: "Stok Akhir", keterangan:"keterangan4", jumlah: 200, tarikh: "10/10/21" },
  //   { kategori: "Hasil Sewaan", keterangan:"keterangan5", jumlah: 200, tarikh: "10/10/21" },
  //   { kategori: "Hasil Dividen", keterangan:"keterangan6", jumlah: 250, tarikh: "10/10/21" },
  //   { kategori: "Hasil Komisen", keterangan:"keterangan7", jumlah: 250, tarikh: "10/10/21" },
  //   { kategori: "Hasil Lain", keterangan:"keterangan8", jumlah: 250, tarikh: "10/10/21" },
  //   { kategori: "Deposit Jualan", keterangan:"keterangan9", jumlah: 250, tarikh: "10/10/21" },
  //   { kategori: "Pulangan Belian", keterangan:"keterangan0", jumlah: 250, tarikh: "10/10/21" },
  // ]

  async tambahTunaiMasuk() {
    console.log("tambah tunai masuk");
    const modal = await this.modalController.create({
      component: TambahTunaiMasukPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  async kemaskiniTunaiMasuk() {
    console.log("kemaskini tunai masuk");
    const modal = await this.modalController.create({
      component: KemaskiniTunaiMasukPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  async tambahTunaiKeluar() {
    console.log("tambah tunai keluar");
    const modal = await this.modalController.create({
      component: TambahTunaiKeluarPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  async kemaskiniTunaiKeluar() {
    console.log("kemaskini tunai keluar");
    const modal = await this.modalController.create({
      component: KemaskiniTunaiKeluarPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  getAliran() {

    this.aliranService.get().subscribe((res) => {
      console.log("aliran", res);

      let temp = [];
      let temp2 = [];
      res.forEach(element => {
        // console.log("id",element.id_kategori_aliran);
        if (element.id_kategori_aliran == 1 || element.id_kategori_aliran == 2 || element.id_kategori_aliran == 3 || element.id_kategori_aliran == 4 || element.id_kategori_aliran == 5 || element.id_kategori_aliran == 6 || element.id_kategori_aliran == 7 || element.id_kategori_aliran == 8) {
          temp.push(element);
        }
        else{
          temp2.push(element);
        }
      });

      this.tunai_masuk = temp;
      this.tunai_keluar = temp2;
    });

  }

}
