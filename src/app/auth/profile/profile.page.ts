import { Component, OnInit } from '@angular/core';

import { LoginService } from 'src/app/services/login/login.service';
import { Observable } from 'rxjs';
import { LoginModel } from 'src/app/services/login/login.model';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UsahawanService } from 'src/app/services/usahawan/usahawan.service';
import { UsahawanModel } from 'src/app/services/usahawan/usahawan.model';
// import { LoginModel } from 'src/app/services/login/login.model';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

import Swal from 'sweetalert2'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  users$: Observable<LoginModel[]>;

  private form: FormGroup;

  usahawan_id = window.sessionStorage.getItem("usahawan_id");
  user_id = window.sessionStorage.getItem("user_id");


  constructor(
    private usahawanService: UsahawanService,
    private loginService: LoginService,
    private router: Router,
    private user: LoginModel,
    private usahawan: UsahawanModel,
    private formBuilder: FormBuilder,
    private loadingController: LoadingController,
    public alertController: AlertController
  ) { 

    this.form = this.formBuilder.group({
      Kod_PT: ['',Validators.required],
      namausahawan:  ['',Validators.required],
      nokadpengenalan:  ['',Validators.required],
      tarikhlahir:  ['',Validators.required],
      U_Jantina_ID:  ['',Validators.required],
      U_Bangsa_ID:  ['',Validators.required],
      statusperkahwinan:  ['',Validators.required],
      U_Pendidikan_ID:  ['',Validators.required],
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
      id_kategori_usahawan:  ['',Validators.required],
      // gambar_url:  ['',Validators.required]),
      notelefon:  ['',Validators.required],
      nohp:  ['',Validators.required],
      email:  ['',Validators.required],
      
    })
  }

  ngOnInit() {


    // var getsession_id = window.sessionStorage.getItem("user_id");
    console.log("usahawan id", this.usahawan_id);
    console.log("user id", this.user_id);
    this.getUsahawan();
    this.getUser(); 
    

    
  }

  setFormValues(){
    this.form.setValue({
      Kod_PT: this.usahawan.Kod_PT,
      namausahawan:  this.usahawan.namausahawan,
      nokadpengenalan:  this.usahawan.nokadpengenalan,
      tarikhlahir:  this.usahawan.tarikhlahir,
      U_Jantina_ID:  this.usahawan.U_Jantina_ID,
      U_Bangsa_ID:  this.usahawan.U_Bangsa_ID,
      statusperkahwinan:  this.usahawan.statusperkahwinan,
      U_Pendidikan_ID:  this.usahawan.U_Pendidikan_ID,
      alamat1:  this.usahawan.alamat1,
      alamat2:  this.usahawan.alamat2,
      alamat3:  this.usahawan.alamat3,
      bandar:  this.usahawan.bandar,
      poskod:  this.usahawan.poskod,
      U_Negeri_ID:  this.usahawan.U_Negeri_ID,
      U_Daerah_ID:  this.usahawan.U_Daerah_ID,
      U_Mukim_ID:  this.usahawan.U_Mukim_ID,
      U_Parlimen_ID:  this.usahawan.U_Parlimen_ID,
      U_Dun_ID:  this.usahawan.U_Dun_ID,
      U_Kampung_ID:  this.usahawan.U_Kampung_ID,
      U_Seksyen_ID:  this.usahawan.U_Seksyen_ID,
      id_kategori_usahawan:  this.usahawan.id_kategori_usahawan,
      // gambar_url:  ['',Validators.required]),
      notelefon:  this.usahawan.notelefon,
      nohp:  this.usahawan.nohp,
      email:  this.usahawan.email,
    })
  }



  getUsahawan() {
    // console.log(this.form.value);
    this.usahawanService.show(this.usahawan_id).subscribe((res) => {
      console.log("usahawan info", res);

      if (Object.keys(res).length === 0) {
        console.log("failed")
      }
      else {
        this.usahawan = res;

        console.log("profile usahawan success")
        this.setFormValues()

      }
    });

  }

  getUser() {
    // console.log(this.form.value);
    this.loginService.show(this.user_id).subscribe((res) => {
      // console.log("user info", res);

      if (Object.keys(res).length === 0) {
        console.log("failed")
      }
      else {
        this.user = res;
        console.log("user info", this.user)
        console.log("profile usahawan success")

      }
    });

  }

  async logForm(){
    const loading = await this.loadingController.create({message:'Loading ...'});
    loading.present();
    console.log(this.form.value)

    this.usahawanService.update(Number(this.usahawan_id), this.form.value).subscribe((res) => {
      console.log(res);


      loading.dismiss();

      this.presentAlert()
    });
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Kemaskini Berjaya',
      subHeader: 'Kemaskini Maklumat Usahawan Telah Berjaya',
      message: '',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
}
