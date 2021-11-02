import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-tambah-katalog',
  templateUrl: './tambah-katalog.page.html',
  styleUrls: ['./tambah-katalog.page.scss'],
})
export class TambahKatalogPage implements OnInit {

  private tunai_masuk: FormGroup;

  constructor(
    public modalController: ModalController,
    private formBuilder: FormBuilder,
  ) {
    this.tunai_masuk = this.formBuilder.group({
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
    console.log(this.tunai_masuk.value)
  }

  file: any;
  img_new: any;
  changeListener($event): void {
    this.file = $event.target.files[0];
    console.log(this.file);
    let reader = new FileReader();
    reader.onload = ($event: any) => {
      this.img_new = $event.target.result;
    }
    reader.readAsDataURL($event.target.files[0]);
  }


}
