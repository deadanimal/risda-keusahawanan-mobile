import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insentif',
  templateUrl: './insentif.page.html',
  styleUrls: ['./insentif.page.scss'],
})
export class InsentifPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  insentif = [
    { tahun: 2017, jumlah: 10000 },
    { tahun: 2018, jumlah: 20000 },
    { tahun: 2019, jumlah: 30000 },
    { tahun: 2020, jumlah: 20000 },
    { tahun: 2021, jumlah: 25000 },
    { tahun: 2022, jumlah: 25000 },
    { tahun: 2023, jumlah: 25000 },
    { tahun: 2024, jumlah: 25000 },
    { tahun: 2025, jumlah: 25000 },
    { tahun: 2026, jumlah: 25000 },
  ]

}
