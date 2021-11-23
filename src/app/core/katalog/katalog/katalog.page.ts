import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { KatalogService } from 'src/app/services/katalog/katalog.service';
import { KemaskiniKatalogPage } from '../kemaskini-katalog/kemaskini-katalog.page';
import { TambahKatalogPage } from '../tambah-katalog/tambah-katalog.page';

@Component({
  selector: 'app-katalog',
  templateUrl: './katalog.page.html',
  styleUrls: ['./katalog.page.scss'],
})
export class KatalogPage implements OnInit {

  usahawan_id = window.sessionStorage.getItem("usahawan_id");
  user_id = window.sessionStorage.getItem("user_id");

  constructor(
    public modalController: ModalController,
    private katalogService: KatalogService,
  ) { }

  ngOnInit() {
    this.getKatalog();
  }

  katalog: any;

  async tambahKatalog() {
    console.log("tambah Katalog");
    const modal = await this.modalController.create({
      component: TambahKatalogPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  async kemaskiniKatalog(katalog: any) {
    console.log("kemaskini Katalog");
    const modal = await this.modalController.create({
      component: KemaskiniKatalogPage,
      componentProps: { katalog },
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  getKatalog() {
    console.log("this.user_id", this.user_id);

    this.katalogService.get(this.user_id).subscribe((res) => {
      console.log("katalog", res);

      this.katalog = res
    });

  }


}
