import { Component, OnInit } from '@angular/core';
import { InsentifService } from 'src/app/services/insentif/insentif.service';

@Component({
  selector: 'app-insentif',
  templateUrl: './insentif.page.html',
  styleUrls: ['./insentif.page.scss'],
})
export class InsentifPage implements OnInit {

  usahawan_id : any
  user_id : any

  constructor(
    private insentifService: InsentifService
  ) { }

  ngOnInit() {
    this.usahawan_id = window.sessionStorage.getItem("usahawan_id");
    this.user_id = window.sessionStorage.getItem("user_id");

    console.log('usahawan_id', this.usahawan_id)
    console.log('user_id', this.user_id)

    this.getInsentif();
  }

  // insentif = [
  //   { tahun: 2017, jumlah: 10000 },
  //   { tahun: 2018, jumlah: 20000 },
  //   { tahun: 2019, jumlah: 30000 },
  //   { tahun: 2020, jumlah: 20000 },
  //   { tahun: 2021, jumlah: 25000 },
  //   { tahun: 2022, jumlah: 25000 },
  //   { tahun: 2023, jumlah: 25000 },
  //   { tahun: 2024, jumlah: 25000 },
  //   { tahun: 2025, jumlah: 25000 },
  //   { tahun: 2026, jumlah: 25000 },
  // ]

  insentif: any;

  getInsentif() {
    this.insentifService.get(this.usahawan_id).subscribe((res) => {
      console.log("insentif", res);

      this.insentif = res;

    });
  }

}
