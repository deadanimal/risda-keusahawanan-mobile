import { Component, OnInit } from '@angular/core';

import { LoginService } from 'src/app/services/login/login.service';
import { Observable } from 'rxjs';
import { LoginModel } from 'src/app/services/login/login.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsahawanService } from 'src/app/services/usahawan/usahawan.service';
import { UsahawanModel } from 'src/app/services/usahawan/usahawan.model';
// import { LoginModel } from 'src/app/services/login/login.model';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  users$: Observable<LoginModel[]>;

  form: FormGroup;

  usahawan_id = window.sessionStorage.getItem("usahawan_id");
  user_id = window.sessionStorage.getItem("user_id");


  constructor(
    private usahawanService: UsahawanService,
    private loginService: LoginService,
    private router: Router,
    private user: LoginModel,
    private usahawan: UsahawanModel
  ) { this.getUser(); }

  ngOnInit() {

    // this.form = new FormGroup({
    //   nama_usahawan: new FormControl(null, [Validators.required]),
    //   no_kp: new FormControl(null, [Validators.required]),
    //   tarikh_lahir: new FormControl(null, [Validators.required]),
    //   jantina: new FormControl(null, [Validators.required]),
    //   bangsa: new FormControl(null, [Validators.required]),
    //   status_perkahwinan: new FormControl(null, [Validators.required]),
    //   tahap_pendidikan: new FormControl(null, [Validators.required]),
    //   alamat1: new FormControl(null, [Validators.required]),
    //   alamat2: new FormControl(null, [Validators.required]),
    //   alamat3: new FormControl(null, [Validators.required]),
    //   bandar: new FormControl(null, [Validators.required]),
    //   poskod: new FormControl(null, [Validators.required]),
    //   negeri: new FormControl(null, [Validators.required]),
    //   daerah: new FormControl(null, [Validators.required]),
    //   mukim: new FormControl(null, [Validators.required]),
    //   parlimen: new FormControl(null, [Validators.required]),
    //   dun: new FormControl(null, [Validators.required]),
    //   kampung: new FormControl(null, [Validators.required]),
    //   seksyen: new FormControl(null, [Validators.required]),
    // })

    // var getsession_id = window.sessionStorage.getItem("user_id");
    console.log("usahawan id", this.usahawan_id);
    console.log("user id", this.user_id);
    this.getUsahawan();

    this.form = new FormGroup({
      no_kp: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
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
}
