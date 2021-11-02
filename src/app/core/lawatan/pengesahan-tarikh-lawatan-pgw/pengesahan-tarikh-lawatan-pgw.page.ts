import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormBuilder } from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pengesahan-tarikh-lawatan-pgw',
  templateUrl: './pengesahan-tarikh-lawatan-pgw.page.html',
  styleUrls: ['./pengesahan-tarikh-lawatan-pgw.page.scss'],
})
export class PengesahanTarikhLawatanPgwPage implements OnInit {

  private tunai_masuk: FormGroup;

  usahawan_id = window.sessionStorage.getItem("usahawan_id");
  user_id = window.sessionStorage.getItem("user_id");

  constructor(
    public modalController: ModalController,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.tunai_masuk = this.formBuilder.group({
      id_pengguna: [''],
      id_kategori_aliran: ['', Validators.required],
      tarikh_aliran: ['', Validators.required],
      keterangan_aliran: ['', Validators.required],
      jumlah_aliran: ['', Validators.required],
      dokumen_lampiran: [''],
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

  logForm() {

    this.tunai_masuk.value.id_pengguna = this.user_id;
    console.log(this.tunai_masuk.value)


  }


  
}
