import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { LoginModel } from '../services/login/login.model';
// import { AuthService } from '../services/auth.service';
import { LoginService } from '../services/login/login.service';
import { take, tap } from 'rxjs/operators';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  users$: Observable<LoginModel[]>;

  form: FormGroup;

  constructor(
    private loginService: LoginService,
    private loadingCtrl: LoadingController,
    private router: Router,
    public alertController: AlertController) { }

  ngOnInit() {

    this.form = new FormGroup({
      no_kp: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
      // device_name: new FormControl(),
    })


  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Ralat',
      subHeader: '',
      message: 'No Kad Pengenalan Atau Kata Laluan Tidak Sah',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  login() {
    console.log(this.form.value);
    this.loginService.check1user(this.form.value).subscribe((res) => {
      console.log("user", res);

      if (Object.keys(res).length === 0) {
        console.log("failed")

        this.presentAlert();
      }
      else {

        var setsession_user_id = window.sessionStorage.setItem("user_id", res.id);
        var setsession_role = window.sessionStorage.setItem("role", res.type);

        if (res.type == 1) {
          // console.log("pegawai")
          var setsession_pegawai_id = window.sessionStorage.setItem("pegawai_id", res.idpegawai);
          var setsession_perananpegawai = window.sessionStorage.setItem("peranan_pegawai", res.role);
          // console.log(window.sessionStorage.getItem("pegawai_id"))
        }
        else if (res.type == 2) {
          // console.log("usahawan")
          var setsession_usahawan_id = window.sessionStorage.setItem("usahawan_id", res.usahawanid);
        }

        console.log("login success")
        // this.router.navigate(['/dashboard']);

        if (res.profile_status == 0) {
          this.router.navigate(['/first-time-login']);
        }
        else if (res.profile_status == 1) {
          this.router.navigate(['/dashboard']);
        }
      }
    });

    this.loginService.login(this.form.value).subscribe((res) => {
      console.log("token", res);

    });

  }

  numericOnly(event): boolean {
    let pattern = /^([0-9])$/;
    let result = pattern.test(event.key);
    return result;
  }

  forget_password() {
    this.router.navigate(['/forgot-password'])
  }
}
