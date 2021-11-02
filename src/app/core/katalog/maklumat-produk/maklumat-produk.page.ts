import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-maklumat-produk',
  templateUrl: './maklumat-produk.page.html',
  styleUrls: ['./maklumat-produk.page.scss'],
})
export class MaklumatProdukPage implements OnInit {

  constructor( public modalController: ModalController,) { }

  ngOnInit() {
  }

  gambar_url = "assets/img/pic1.jpeg";



  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }
}
