import { Component, Input, OnInit } from '@angular/core';
import { AlertController, LoadingController, ModalController } from '@ionic/angular';
import { FormBuilder } from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LawatanService } from 'src/app/services/lawatan/lawatan.service';
import * as moment from 'moment';


@Component({
  selector: 'app-pengesahan-tarikh-lawatan-pgw',
  templateUrl: './pengesahan-tarikh-lawatan-pgw.page.html',
  styleUrls: ['./pengesahan-tarikh-lawatan-pgw.page.scss'],
})
export class PengesahanTarikhLawatanPgwPage implements OnInit {

  @Input() lawatan: any;

  private form: FormGroup;

  pegawai_id = window.sessionStorage.getItem("pegawai_id");
  usahawan_id = window.sessionStorage.getItem("usahawan_id");
  user_id = window.sessionStorage.getItem("user_id");

  constructor(
    public modalController: ModalController,
    private formBuilder: FormBuilder,
    public loadingController: LoadingController,
    public alertController: AlertController,
    private router: Router,
    private lawatanService: LawatanService,
  ) {
    this.form = this.formBuilder.group({
      namausahawan: ['',],
      nama_pegawai: ['',],
      tarikh_lawatan: ['', Validators.required],
      masa_lawatan: ['', Validators.required],
      status_lawatan: ['',],
    });
  }

  ngOnInit() {
    console.log(this.lawatan)

    this.setFormValues();
  }

  setFormValues() {

    this.form.setValue({
      namausahawan: this.lawatan.namausahawan,
      nama_pegawai: this.lawatan.nama_pegawai,
      tarikh_lawatan: this.lawatan.tarikh_lawatan,
      masa_lawatan: this.lawatan.masa_lawatan,
      status_lawatan: this.lawatan.status_lawatan,
    });

    this.form.updateValueAndValidity();
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  logForm() {

    if (this.pegawai_id == null) {
      //usahawan
      this.form.value.status_lawatan = "2"
    } else {
      //pegawai
      this.form.value.status_lawatan = "1"
    }

    this.form.value.tarikh_lawatan = moment(this.form.value.tarikh_lawatan).format('YYYY-MM-DD');
    // this.form.value.masa_lawatan = moment(this.form.value.masa_lawatan).format('hh:mm:ss[.nnnnnnn]');
    
    console.log(this.form.value)
    this.lawatanService.update(this.form.value, this.lawatan.lawatan_id).subscribe((res) => {
      console.log("res", res);

      this.dismiss();

      window.location.reload();
    });
  }

  sahkan() {

    this.form.value.status_lawatan = "3"

    console.log(this.form.value)
    this.lawatanService.update(this.form.value, this.lawatan.lawatan_id).subscribe((res) => {
      console.log("res", res);

      this.dismiss();

      window.location.reload();
    });
  }

}
