import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginModel } from 'src/app/services/login/login.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PekebunModel } from 'src/app/services/pekebun/pekebun.model';
import { PekebunService } from 'src/app/services/pekebun/pekebun.service';
@Component({
  selector: 'app-profile-pekebun',
  templateUrl: './profile-pekebun.page.html',
  styleUrls: ['./profile-pekebun.page.scss'],
})
export class ProfilePekebunPage implements OnInit {

  form: FormGroup;

  usahawan_id = window.sessionStorage.getItem("usahawan_id");
  user_id = window.sessionStorage.getItem("user_id");

  constructor(
    private pekebunService: PekebunService,
    private router: Router,
    private pekebun: PekebunModel,
  ) { }

  ngOnInit() {

    console.log("usahawan id", this.usahawan_id);
    console.log("user id", this.user_id);

    this.getPekebun();
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

}
