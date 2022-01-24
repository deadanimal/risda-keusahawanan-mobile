import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PdfExcelService } from 'src/app/services/pdfExcel/pdf-excel.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-ringkasan-lejar',
  templateUrl: './ringkasan-lejar.page.html',
  styleUrls: ['./ringkasan-lejar.page.scss'],
})
export class RingkasanLejarPage implements OnInit {

  date = new Date();

  year: any;

  month: any;

  private form: FormGroup;
  user_id = window.sessionStorage.getItem("user_id");

  listYear = [];
  listMonth = [
    { value: "1", name: "January" },
    { value: "2", name: "February" },
    { value: "3", name: "March" },
    { value: "4", name: "April" },
    { value: "5", name: "May" },
    { value: "6", name: "June" },
    { value: "7", name: "July" },
    { value: "8", name: "August" },
    { value: "9", name: "September" },
    { value: "10", name: "October" },
    { value: "11", name: "November" },
    { value: "12", name: "December" },
  ];
  // bulan = new Date()

  constructor(
    private formBuilder: FormBuilder,
    private pdfExcelService: PdfExcelService,
  ) {
    this.form = this.formBuilder.group({
      id: ['',],
      bulan: ['', Validators.required],
      tahun: ['', Validators.required],

    });
  }

  ngOnInit() {
    // console.log("AAAAA", this.date.getMonth() + 1);
    // console.log("BBB", this.date.getFullYear());
    this.month = this.date.getMonth() + 1
    this.year = Number(this.date.getFullYear());
    for (let i = 0; i <= 30; i++) {

      this.listYear.push(this.year)
      this.year = this.year - 1

    }


  }


  // buku_tunai = [
  //   { bulan: "Januari", tahun: "2020" },
  //   { bulan: "February", tahun: "2020" },
  //   { bulan: "March", tahun: "2020" },
  //   { bulan: "April", tahun: "2020" },
  //   { bulan: "May", tahun: "2020" },
  //   { bulan: "June", tahun: "2020" },
  //   { bulan: "July", tahun: "2020" },
  // ]

  logForm() {
    console.log(this.form.value)
  }

  printExcelCustom() {

    this.form.value.id = this.user_id;
    console.log(this.form.value)

    this.pdfExcelService.lejarExcel(this.form.value).subscribe((res) => {
      console.log("res", res);

      let url = environment.baseUrl + 'storage/' + res;

      console.log(url);
      window.open(url, "_blank");

    });
  }

  printPdfCustom() {
    this.form.value.id = this.user_id;
    console.log(this.form.value)

    this.pdfExcelService.lejarPdf(this.form.value).subscribe((res) => {
      console.log("res", res);

      let url = environment.baseUrl + 'storage/' + res;

      console.log(url);
      window.open(url, "_blank");

    });
  }


  printExcel(bulan) {

    this.form.value.id = this.user_id;
    this.form.value.bulan = bulan;
    this.form.value.tahun = this.date.getFullYear();
    console.log(this.form.value)

    this.pdfExcelService.pnlExcel(this.form.value).subscribe((res) => {
      console.log("res", res);

      let url = environment.baseUrl + 'storage/' + res;

      console.log(url);
      window.open(url, "_blank");

    });
  }

  printPdf(bulan) {

    this.form.value.id = this.user_id;
    this.form.value.bulan = bulan;
    this.form.value.tahun = this.date.getFullYear();
    console.log(this.form.value)

    this.pdfExcelService.lejarPdf(this.form.value).subscribe((res) => {
      console.log("res", res);

      let url = environment.baseUrl + 'storage/' + res;

      console.log(url);
      window.open(url, "_blank");

    });
  }

  share() {
    console.log("share")
  }

}