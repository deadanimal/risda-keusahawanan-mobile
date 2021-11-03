import { Component, OnInit } from '@angular/core';

import { LoginService } from 'src/app/services/login/login.service';
import { Observable } from 'rxjs';
import { LoginModel } from 'src/app/services/login/login.model';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SyarikatModel } from 'src/app/services/syarikat/syarikat.model';
import { SyarikatService } from 'src/app/services/syarikat/syarikat.service';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-profile-syarikat',
  templateUrl: './profile-syarikat.page.html',
  styleUrls: ['./profile-syarikat.page.scss'],
})
export class ProfileSyarikatPage implements OnInit {

  form: FormGroup;

  usahawan_id = window.sessionStorage.getItem("usahawan_id");
  user_id = window.sessionStorage.getItem("user_id");

  constructor(
    private syarikatService: SyarikatService,
    private loginService: LoginService,
    private router: Router,
    private syarikat: SyarikatModel,
    public alertController: AlertController,
    private loadingController: LoadingController,
    private formBuilder: FormBuilder,
  ) { 
    this.form = this.formBuilder.group({
      namasyarikat: ['',Validators.required],
      jenismilikanperniagaan:  ['',Validators.required],
      nodaftarssm:  ['',Validators.required],
      nodaftarpbt:  ['',Validators.required],
      nodaftarpersijilanhalal:  ['',Validators.required],
      nodaftarmesti:  ['',Validators.required],
      tahunmulaoperasi:  ['',Validators.required],
      bilanganpekerja:  ['',Validators.required],
      alamat1_ssm:  ['',Validators.required],
      alamat2_ssm:  ['',Validators.required],
      alamat3_ssm:  ['',Validators.required],
      tarikh_mula_mof:  ['',Validators.required],
      tarikh_tamat_mof:  ['',Validators.required],
      status_bumiputera:  ['',Validators.required],
      prefix_id:  ['',Validators.required],
      notelefon:  ['',Validators.required],
      no_hp:  ['',Validators.required],
      email:  ['',Validators.required],
      
    })
  }


  ngOnInit() {

    console.log("usahawan id", this.usahawan_id);
    console.log("user id", this.user_id);

    this.getSyarikat();
  }

  getSyarikat() {
    // console.log(this.form.value);
    this.syarikatService.show(this.usahawan_id).subscribe((res) => {
      console.log("syarikat info", res);

      if (Object.keys(res).length === 0) {
        console.log("failed")
      }
      else {
        this.syarikat = res;

        console.log("profile syarikat success")
        this.setFormValues();
      }
    });

  }

  setFormValues(){
    this.form.setValue({
      namasyarikat: this.syarikat.namasyarikat,
      jenismilikanperniagaan:  this.syarikat.jenismilikanperniagaan,
      nodaftarssm:  this.syarikat.nodaftarssm,
      nodaftarpbt:  this.syarikat.nodaftarpbt,
      nodaftarpersijilanhalal:  this.syarikat.nodaftarpersijilanhalal,
      nodaftarmesti:  this.syarikat.nodaftarmesti,
      tahunmulaoperasi:  this.syarikat.tahunmulaoperasi,
      bilanganpekerja:  this.syarikat.bilanganpekerja,
      alamat1_ssm:  this.syarikat.alamat1_ssm,
      alamat2_ssm:  this.syarikat.alamat2_ssm,
      alamat3_ssm:  this.syarikat.alamat3_ssm,
      tarikh_mula_mof:  this.syarikat.tarikh_mula_mof,
      tarikh_tamat_mof:  this.syarikat.tarikh_tamat_mof,
      status_bumiputera:  this.syarikat.status_bumiputera,
      prefix_id:  this.syarikat.prefix_id,
      notelefon:  this.syarikat.notelefon,
      no_hp:  this.syarikat.no_hp,
      email:  this.syarikat.email,
    })
  }

  async logForm(){
    const loading = await this.loadingController.create({message:'Loading ...'});
    loading.present();
    console.log(this.form.value)

    this.syarikatService.update(this.form.value, Number(this.usahawan_id)).subscribe((res) => {
      console.log("updated data",res);


      loading.dismiss();

      this.presentAlert()
    });
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Kemaskini Berjaya',
      subHeader: 'Kemaskini Maklumat Syarikat Telah Berjaya',
      message: '',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

}
