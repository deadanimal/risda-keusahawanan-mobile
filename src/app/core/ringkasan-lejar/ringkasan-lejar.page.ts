import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ringkasan-lejar',
  templateUrl: './ringkasan-lejar.page.html',
  styleUrls: ['./ringkasan-lejar.page.scss'],
})
export class RingkasanLejarPage implements OnInit {

  month: String = new Date().toISOString();

  year: String = new Date().toISOString();

  constructor() { }

  ngOnInit() {
  }


  buku_tunai = [
    { bulan: "Januari", tahun: "2020" },
    { bulan: "February", tahun: "2020" },
    { bulan: "March", tahun: "2020" },
    { bulan: "April", tahun: "2020" },
    { bulan: "May", tahun: "2020" },
    { bulan: "June", tahun: "2020" },
    { bulan: "July", tahun: "2020" },
  ]

  printExcel(){
    console.log("print excel")
  }

  printPdf(){
    console.log("print pdf")
  }

  share(){
    console.log("share")
  }

}
