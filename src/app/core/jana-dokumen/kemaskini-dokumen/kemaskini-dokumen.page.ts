import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-kemaskini-dokumen',
  templateUrl: './kemaskini-dokumen.page.html',
  styleUrls: ['./kemaskini-dokumen.page.scss'],
})
export class KemaskiniDokumenPage implements OnInit {

  private tambah_dokumen: FormGroup;

  constructor(
    public modalController: ModalController,
    private formBuilder: FormBuilder,
  ) { 
    this.tambah_dokumen = this.formBuilder.group({
      title: ['', Validators.required],
      nama_produk: [''],
      downtime_start: [''],
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
    console.log(this.tambah_dokumen.value)
  }

}
