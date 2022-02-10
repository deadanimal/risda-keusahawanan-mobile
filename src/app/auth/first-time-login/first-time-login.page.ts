import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ForgotPasswordService } from 'src/app/services/forgot-password/forgot-password.service';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-first-time-login',
  templateUrl: './first-time-login.page.html',
  styleUrls: ['./first-time-login.page.scss'],
})
export class FirstTimeLoginPage implements OnInit {

  private form: FormGroup;
  private form2: FormGroup;

  user_id = window.sessionStorage.getItem("user_id");
  profile_status = window.sessionStorage.getItem("profile_status");

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private forgotPassService: ForgotPasswordService,
    private loadingController: LoadingController,
    public alertController: AlertController
  ) {
    this.form = this.formBuilder.group({
      email: ['', Validators.required,],
      password: ['', Validators.required,],
      confirm_password: ['', Validators.required,],
    });


    this.form2 = this.formBuilder.group({
      password: ['', Validators.required,],
      confirm_password: ['', Validators.required,],
    });
  }

  ngOnInit() {
    console.log("profile_status", this.profile_status)
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: '',
      message: 'Adakah anda setuju untuk mengemaskini alamat email dan kata laluan?',
      buttons: [
        {
          text: 'Tidak',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Ya',
          cssClass: "yes-custom",
          handler: () => {
            console.log('Confirm Okay');
            // this.presentAlert();

          }
        }
      ]
    });

    await alert.present();
  }


  errorMsg: string;
  async logForm() {

    console.log(this.form.value);

    if (this.form.value.password == this.form.value.confirm_password) {

      const loading = await this.loadingController.create({ message: 'Loading ...' });
      loading.present();

      this.forgotPassService.firstTimeLogin(this.form.value, this.user_id).subscribe((res) => {
        console.log("res", res);

        if(res == 'email already exist'){
          loading.dismiss();
          this.presentAlertEmailFailed()
        } else {
          loading.dismiss();
          this.presentAlertUpdatesucces()
        }
      });
    } else {
      this.presentAlertFailed()
    }

  }

  async presentAlertEmailFailed() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Harap Maaf',
      // subHeader: 'Subtitle',
      message: 'Email yang digunakan telah wujud',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  async presentAlertFailed() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Tidak Berjaya',
      // subHeader: 'Subtitle',
      message: 'Kata laluan tidak sepandan dengan pengesahan kata laluan',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  async presentAlertUpdatesucces() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Kemaskini Berjaya',
      // subHeader: 'Subtitle',
      message: 'Email dan kata laluan berjaya dikemaskini',
      buttons: [
        {
          text: 'Okay',
          // id: 'confirm-button',
          handler: () => {
            this.router.navigate(['/dashboard'])
          }
        }
      ]
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  async logForm2() {

    console.log(this.form2.value);

    if (this.form2.value.password == this.form2.value.confirm_password) {
      console.log("berjaya");

      const loading = await this.loadingController.create({ message: 'Loading ...' });
      loading.present();

      this.forgotPassService.updatePassword(this.form2.value, this.user_id).subscribe((res) => {
        console.log("res", res);


        loading.dismiss();
        this.presentAlertUpdatesucces()
      });
    } else {
      this.presentAlertFailed()
    }

  }

}
