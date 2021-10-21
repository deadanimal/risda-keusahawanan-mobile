import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

import { map } from 'rxjs/operators';
import { AliranService } from 'src/app/services/Aliran/aliran.service';
import { KategoriAliranService } from 'src/app/services/kategoriAliran/kategori-aliran.service';

@Component({
  selector: 'app-tambah-tunai-keluar',
  templateUrl: './tambah-tunai-keluar.page.html',
  styleUrls: ['./tambah-tunai-keluar.page.scss'],
})
export class TambahTunaiKeluarPage implements OnInit {

  private tunai_keluar: FormGroup;

  usahawan_id = window.sessionStorage.getItem("usahawan_id");
  user_id = window.sessionStorage.getItem("user_id");

  constructor(
    public modalController: ModalController,
    private formBuilder: FormBuilder,
    private aliranService:AliranService,
    private kategoriAliranService:KategoriAliranService,
    
  ) {
    this.tunai_keluar = this.formBuilder.group({
      id_pengguna: [''],
      id_kategori_aliran: ['', Validators.required],
      tarikh_aliran:['', Validators.required],
      keterangan_aliran: ['', Validators.required],
      jumlah_aliran:['', Validators.required],
      dokumen_lampiran:[''],
    });
  }

  ngOnInit() {
    this.getKategoriAliran();
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

    this.tunai_keluar.value.id_pengguna = this.user_id;
    console.log(this.tunai_keluar.value)

    this.aliranService.post(this.tunai_keluar.value).subscribe((res) => {
      console.log("res",res);

      this.refresh();
      this.dismiss();

    });
  }

  kategori_aliran_masuk :any;

  getKategoriAliran() {

    this.kategoriAliranService.getKategoriAliran().pipe(map(x => x.filter(i => i.jenis_aliran == "tunai_keluar"))).subscribe((res) => {
      console.log("kategori aliran",res);
      this.kategori_aliran_masuk = res;
      console.log("kategori aliran",this.kategori_aliran_masuk);
    });

  }

  refresh(): void {
    window.location.reload();
  }

}
