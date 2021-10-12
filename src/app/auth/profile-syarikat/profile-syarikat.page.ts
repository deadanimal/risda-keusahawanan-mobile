import { Component, OnInit } from '@angular/core';

import { LoginService } from 'src/app/services/login/login.service';
import { Observable } from 'rxjs';
import { LoginModel } from 'src/app/services/login/login.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SyarikatModel } from 'src/app/services/syarikat/syarikat.model';
import { SyarikatService } from 'src/app/services/syarikat/syarikat.service';

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
  ) { }


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

      }
    });

  }

}
