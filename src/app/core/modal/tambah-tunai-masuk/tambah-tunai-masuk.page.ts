import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormBuilder } from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { KategoriAliranService } from 'src/app/services/kategoriAliran/kategori-aliran.service';
import { map } from 'rxjs/operators';
import { AliranService } from 'src/app/services/Aliran/aliran.service';
import { Router } from '@angular/router';
// import Swal from 'sweetalert2/dist/sweetalert2.js';
// import swal from 'sweetalert';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
// import { File } from '@ionic-native/file';



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
    this.getKategoriAliran();
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

    this.aliranService.post(this.tunai_masuk.value).subscribe((res) => {
      console.log("res", res);

      // this.refresh();
      // this.dismiss();
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

  userDetails: any;
  handleFileInput(event) {
    console.log(event);
    this.userDetails.profilePic = event.target.files[0];
  }

  // openmodal()
  // {
  //   console.log("success")
  //   swal("Hello world!");
  // }

}
