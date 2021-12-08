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

  ]

  constructor(
    public modalController: ModalController,
    private katalogService: KatalogService,
  ) { }

  ngOnInit() {
    this.getKatalog();
  }

  async lihatKatalog(katalog: any) {
    console.log("kemaskini Katalog");
    const modal = await this.modalController.create({
      component: MaklumatProdukPage,
      componentProps: { katalog },
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  getKatalog() {
    console.log("this.user_id", this.user_id);
    this.katalogService.getKatalogPegawai(4).subscribe((res) => {
      console.log("katalog", res);

      this.katalog = res
    });

  }

}
