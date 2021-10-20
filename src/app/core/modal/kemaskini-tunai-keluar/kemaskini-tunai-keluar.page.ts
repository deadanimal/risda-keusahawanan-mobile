import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-kemaskini-tunai-keluar',
  templateUrl: './kemaskini-tunai-keluar.page.html',
  styleUrls: ['./kemaskini-tunai-keluar.page.scss'],
})
export class KemaskiniTunaiKeluarPage implements OnInit {

  private tunai_keluar: FormGroup;

  constructor(
    public modalController: ModalController,
    private formBuilder: FormBuilder,
  ) {
    this.tunai_keluar = this.formBuilder.group({
      title: ['', Validators.required],
      description: [''],
      downtime_start:[''],
    });
  }

  ngOnInit() {
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  logForm(){
    console.log(this.tunai_keluar.value)
  }

}
