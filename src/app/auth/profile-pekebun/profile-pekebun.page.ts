import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginModel } from 'src/app/services/login/login.model';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PekebunModel } from 'src/app/services/pekebun/pekebun.model';
import { PekebunService } from 'src/app/services/pekebun/pekebun.service';
import { PekebunKecilService } from 'src/app/services/PekebunKecil/pekebun-kecil.service';
@Component({
  selector: 'app-profile-pekebun',
  templateUrl: './profile-pekebun.page.html',
  styleUrls: ['./profile-pekebun.page.scss'],
})
export class ProfilePekebunPage implements OnInit {

  private form: FormGroup;

  usahawan_id = window.sessionStorage.getItem("usahawan_id");
  user_id = window.sessionStorage.getItem("user_id");

  constructor(
    private pekebunService: PekebunService,
    private router: Router,
    private pekebun: PekebunModel,
    private pekebunKecilService: PekebunKecilService,
    private formBuilder: FormBuilder,

  ) {
    this.form = this.formBuilder.group({
      no_kp: ['',],
      id_pengguna: ['', ],
      tarikh_lawatan: ['', Validators.required],
      masa_lawatan: ['', Validators.required],
      id_tindakan_lawatan: ['', Validators.required],
      komen: ['', Validators.required],
      jenis_lawatan: ['', Validators.required],
      gambar_lawatan: ['',],
    });
  }

  ngOnInit() {

    console.log("usahawan id", this.usahawan_id);
    console.log("user id", this.user_id);

    this.getPekebun();

    this.getMaklumatPekebun();
  }

  getPekebun() {
    // console.log(this.form.value);
    this.pekebunService.show(this.usahawan_id).subscribe((res) => {
      console.log("pekebun info", res);

      if (Object.keys(res).length === 0) {
        console.log("failed")
      }
      else {
        this.pekebun = res;

        console.log("profile pekebun success")

      }
    });
  }


  getMaklumatPekebun() {
    // console.log(this.form.value);

    let nokp = "660421015422"

    this.pekebunService.getPekebunEpek(nokp).subscribe((res) => {
      console.log("pekebun kecil info", res);

    });
  }

}
