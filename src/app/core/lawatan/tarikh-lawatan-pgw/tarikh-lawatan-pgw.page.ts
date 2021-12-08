import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormBuilder } from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { LawatanService } from 'src/app/services/lawatan/lawatan.service';

@Component({
  selector: 'app-tarikh-lawatan-pgw',
  templateUrl: './tarikh-lawatan-pgw.page.html',
  styleUrls: ['./tarikh-lawatan-pgw.page.scss'],
})
export class TarikhLawatanPgwPage implements OnInit {

  private form: FormGroup;

  usahawan_id = window.sessionStorage.getItem("usahawan_id");
  pegawai_id = window.sessionStorage.getItem("pegawai_id");
  user_id = window.sessionStorage.getItem("user_id");

  constructor(
    public modalController: ModalController,
    private formBuilder: FormBuilder,
    private router: Router,
    private lawatanService: LawatanService,
  ) {
    this.form = this.formBuilder.group({
      id_pengguna: ['', Validators.required],
      id_pegawai: ['',],
      tarikh_lawatan: ['', Validators.required],
      masa_lawatan: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.getSenaraiUsahawan();
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  logForm() {
    
    this.form.value.tarikh_lawatan = moment(this.form.value.tarikh_lawatan).format('YYYY-MM-DD');
    this.form.value.masa_lawatan = moment(this.form.value.masa_lawatan).format('HH:mm');

    this.form.value.id_pegawai = this.pegawai_id;

    console.log(this.form.value) 

    this.lawatanService.post(this.form.value).subscribe((res) => {
      console.log("res", res);

      this.dismiss();

      window.location.reload();
    });


  }

  usahawan :any;
  getSenaraiUsahawan(){
    this.lawatanService.getsenaraiusahawan(this.pegawai_id).subscribe((res) => {
      console.log("usahawan", res);
      this.usahawan = res;
     
    });
  }


  
}
