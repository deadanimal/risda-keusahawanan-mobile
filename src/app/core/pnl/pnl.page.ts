import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pnl',
  templateUrl: './pnl.page.html',
  styleUrls: ['./pnl.page.scss'],
})
export class PnlPage implements OnInit {

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
