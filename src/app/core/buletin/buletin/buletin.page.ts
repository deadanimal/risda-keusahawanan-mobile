import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BuletinService } from 'src/app/services/buletin/buletin.service';
import { KemaskiniBuletinPage } from '../kemaskini-buletin/kemaskini-buletin.page';
import { TambahBuletinPage } from '../tambah-buletin/tambah-buletin.page';

@Component({
  selector: 'app-buletin',
  templateUrl: './buletin.page.html',
  styleUrls: ['./buletin.page.scss'],
})
export class BuletinPage implements OnInit {

  pegawai_id = window.sessionStorage.getItem("pegawai_id");
  user_id = window.sessionStorage.getItem("user_id");

  buletin: any;

  constructor(
    public modalController: ModalController,
    private buletinService: BuletinService
  ) { }

  ngOnInit() {
    this.getBuletin();
  }

  getBuletin() {
    this.buletinService.get(this.pegawai_id).subscribe((res) => {
      console.log("res", res);

      this.buletin = res;
    });
  }

  async tambahBuletin() {
    console.log("Tambah Dokumen");
    const modal = await this.modalController.create({
      component: TambahBuletinPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  async kemaskiniBuletin(buletin) {
    console.log("Tambah Dokumen");
    const modal = await this.modalController.create({
      component: KemaskiniBuletinPage,
      componentProps: { buletin },
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

}
