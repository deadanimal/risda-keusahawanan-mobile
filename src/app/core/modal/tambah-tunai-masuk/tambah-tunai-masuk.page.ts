import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormBuilder } from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { KategoriAliranService } from 'src/app/services/kategoriAliran/kategori-aliran.service';
import { map } from 'rxjs/operators';
import { AliranService } from 'src/app/services/Aliran/aliran.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
// import Swal from 'sweetalert2/dist/sweetalert2.js';
// import swal from 'sweetalert';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
// import { File } from '@ionic-native/file';

import * as moment from 'moment';

@Component({
  selector: 'app-tambah-tunai-masuk',
  templateUrl: './tambah-tunai-masuk.page.html',
  styleUrls: ['./tambah-tunai-masuk.page.scss'],
})
export class TambahTunaiMasukPage implements OnInit {

  private tunai_masuk: FormGroup;

  usahawan_id = window.sessionStorage.getItem("usahawan_id");
  user_id = window.sessionStorage.getItem("user_id");

  constructor(
    public modalController: ModalController,
    private formBuilder: FormBuilder,
    private kategoriAliranService: KategoriAliranService,
    private aliranService: AliranService,
    private router: Router,
    private http: HttpClient
  ) {
    this.tunai_masuk = this.formBuilder.group({
      id_pengguna: [''],
      id_kategori_aliran: ['', Validators.required],
      tarikh_aliran: ['', Validators.required],
      keterangan_aliran: ['', Validators.required],
      jumlah_aliran: ['', Validators.required],
      nama_dokumen: [''],
      dokumen_lampiran: [''],
    });
  }

  ngOnInit() {
    this.getKategoriAliran();

    let formData = new FormData();

    formData.append('username', 'Chris');

    console.log("FORMMMMM", formData);

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
    this.tunai_masuk.value.tarikh_aliran = moment(this.tunai_masuk.value.tarikh_aliran).format('YYYY-MM-DD');
    if(this.file != null){
      this.tunai_masuk.value.nama_dokumen = this.file.name;
    }
    

    console.log(this.tunai_masuk.value)

    this.aliranService.post(this.tunai_masuk.value).subscribe((res) => {
      console.log("res", res);

      // let i=1;

      let formdata = new FormData();

      formdata.append('dokumen_lampiran', this.tunai_masuk.value.dokumen_lampiran);

      this.aliranService.uploadDoc(formdata, res.id).subscribe((resDoc) => {
        console.log("resDoc", resDoc);

        this.refresh();
        this.dismiss();
      })

      // console.log(formdata);
    });

  }

  kategori_aliran_masuk: any;

  getKategoriAliran() {

    this.kategoriAliranService.getKategoriAliran().pipe(map(x => x.filter(i => i.jenis_aliran == "tunai_masuk"))).subscribe((res) => {
      console.log("kategori aliran", res);
      this.kategori_aliran_masuk = res;
      console.log("kategori aliran", this.kategori_aliran_masuk);
    });

  }

  refresh(): void {
    window.location.reload();
  }

  file: any;
  selectedFile(event) {
    this.file = event.target.files[0];
    console.log(this.file)

    this.tunai_masuk.value.dokumen_lampiran = this.file;
    console.log(this.tunai_masuk.value.dokumen_lampiran);

    // document.getElementById("nama_fail").innerHTML(this.file)
    (document.getElementById('nama_fail') as HTMLIonTextElement).innerHTML = this.file.name;

  }


}
