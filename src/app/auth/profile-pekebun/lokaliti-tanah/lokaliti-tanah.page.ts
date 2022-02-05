import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-lokaliti-tanah',
  templateUrl: './lokaliti-tanah.page.html',
  styleUrls: ['./lokaliti-tanah.page.scss'],
})
export class LokalitiTanahPage implements OnInit {


  @Input() tanah: any;

  constructor(
    public modalController: ModalController,
  ) { }

  ngOnInit() {

    console.log("tanah", this.tanah)
  }


  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }

}
