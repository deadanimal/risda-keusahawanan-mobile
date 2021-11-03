import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { LoginModel } from 'src/app/services/login/login.model';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PerniagaanModel } from 'src/app/services/perniagaan/perniagaan.model';
import { PerniagaanService } from 'src/app/services/perniagaan/perniagaan.service';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-profile-perniagaan',
  templateUrl: './profile-perniagaan.page.html',
  styleUrls: ['./profile-perniagaan.page.scss'],
})


export class ProfilePerniagaanPage implements OnInit {

  form: FormGroup;

  usahawan_id = window.sessionStorage.getItem("usahawan_id");
  user_id = window.sessionStorage.getItem("user_id");

  constructor(
    private perniagaanService: PerniagaanService,
    private router: Router,
    private perniagaan: PerniagaanModel,
    public alertController: AlertController,
    private loadingController: LoadingController,
    private formBuilder: FormBuilder,
  ) { 
    this.form = this.formBuilder.group({
      jenisperniagaan: ['',Validators.required],
      klusterperniagaan:  ['',Validators.required],
      subkluster:  ['',Validators.required],
      alamat1:  ['',Validators.required],
      alamat2:  ['',Validators.required],
      alamat3:  ['',Validators.required],
      bandar:  ['',Validators.required],
      poskod:  ['',Validators.required],
      U_Negeri_ID:  ['',Validators.required],
      U_Daerah_ID:  ['',Validators.required],
      U_Mukim_ID:  ['',Validators.required],
      U_Parlimen_ID:  ['',Validators.required],
      U_Dun_ID:  ['',Validators.required],
      U_Kampung_ID:  ['',Validators.required],
      U_Seksyen_ID:  ['',Validators.required],
      latitud:  ['',Validators.required],
      logitud:  ['',Validators.required],
      facebook:  ['',Validators.required],
      instagram:  ['',],
      twitter:  ['',],
      lamanweb:  ['',],
      dropship:  ['',],
      ejen:  ['',],
      stokis:  ['',],
      outlet:  ['',],
      domestik:  ['',],
      luarnegara:  ['',],
      pasaranonline:  ['',],
      purata_jualan_bulanan:  ['',],
      // purata_jualan_tahunan:  ['',Validators.required],
      hasil_jualan_tahunan:  ['',],
    })
  }

  ngOnInit() {

    console.log("usahawan id", this.usahawan_id);
    console.log("user id", this.user_id);

    this.getPerniagaan();
  }

  groups = [
    {
      title: 'Dynamic Group Header - 1',
      content: 'Dynamic Group Body - 1'
    },
    {
      title: 'Dynamic Group Header - 2',
      content: 'Dynamic Group Body - 2'
    }
  ];

  addGroupItem(): void {
    this.groups.push({
      title: `Dynamic Group Header - ${this.groups.length + 1}`,
      content: `Dynamic Group Body - ${this.groups.length + 1}`
    });
  }

  removeItem(): void {
    this.groups = this.groups.slice(0, this.groups.length - 1);
  }

  getPerniagaan() {
    // console.log(this.form.value);
    this.perniagaanService.show(this.usahawan_id).subscribe((res) => {
      console.log("perniagaan info", res);

      if (Object.keys(res).length === 0) {
        console.log("failed")
      }
      else {
        this.perniagaan = res;

        console.log("profile perniagaan success")

      }
    });

  }

  setFormValues(){
    this.form.setValue({
      jenisperniagaan: this.perniagaan.jenisperniagaan,
      klusterperniagaan:  this.perniagaan.klusterperniagaan,
      subkluster:  this.perniagaan.subkluster,
      alamat1:  this.perniagaan.alamat1,
      alamat2:  this.perniagaan.alamat2,
      alamat3:  this.perniagaan.alamat3,
      bandar:  this.perniagaan.bandar,
      poskod:  this.perniagaan.poskod,
      U_Negeri_ID:  this.perniagaan.U_Negeri_ID,
      U_Daerah_ID:  this.perniagaan.U_Daerah_ID,
      U_Mukim_ID:  this.perniagaan.U_Mukim_ID,
      U_Parlimen_ID:  this.perniagaan.U_Parlimen_ID,
      U_Dun_ID:  this.perniagaan.U_Dun_ID,
      U_Kampung_ID:  this.perniagaan.U_Kampung_ID,
      U_Seksyen_ID:  this.perniagaan.U_Seksyen_ID,
      latitud:  this.perniagaan.latitud,
      logitud:  this.perniagaan.logitud,
      facebook:  this.perniagaan.facebook,
      instagram:  this.perniagaan.instagram,
      twitter:  this.perniagaan.twitter,
      lamanweb:  this.perniagaan.lamanweb,
      dropship:  this.perniagaan.dropship,
      ejen:  this.perniagaan.ejen,
      stokis:  this.perniagaan.stokis,
      outlet:  this.perniagaan.outlet,
      domestik:  this.perniagaan.domestik,
      luarnegara:  this.perniagaan.luarnegara,
      pasaranonline:  this.perniagaan.pasaranonline,
      purata_jualan_bulanan:  this.perniagaan.purata_jualan_bulanan,
      // purata_jualan_tahunan:  ['',Validators.required],
      hasil_jualan_tahunan:  this.perniagaan.hasil_jualan_tahunan
    })
  }

  async logForm(){
    const loading = await this.loadingController.create({message:'Loading ...'});
    loading.present();
    console.log(this.form.value)

    this.perniagaanService.update(this.form.value, Number(this.usahawan_id)).subscribe((res) => {
      console.log("updated data",res);


      loading.dismiss();

      this.presentAlert()
    });
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Kemaskini Berjaya',
      subHeader: 'Kemaskini Maklumat Perniagaan Telah Berjaya',
      message: '',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }




}
