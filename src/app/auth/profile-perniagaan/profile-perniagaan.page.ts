import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { LoginModel } from 'src/app/services/login/login.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PerniagaanModel } from 'src/app/services/perniagaan/perniagaan.model';
import { PerniagaanService } from 'src/app/services/perniagaan/perniagaan.service';

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
  ) { }

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




}
