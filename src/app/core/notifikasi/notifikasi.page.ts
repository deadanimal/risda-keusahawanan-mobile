import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifikasi',
  templateUrl: './notifikasi.page.html',
  styleUrls: ['./notifikasi.page.scss'],
})
export class NotifikasiPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  notifikasi = [
    { tajuk:"notifikasi1", keterangan:"aaa", masa:""},
    { tajuk:"notifikasi2", keterangan:"bbb", masa:""},
    { tajuk:"notifikasi3", keterangan:"ccc", masa:""},
    { tajuk:"notifikasi4", keterangan:"ddd", masa:""},
    { tajuk:"notifikasi5", keterangan:"eee", masa:""},
    { tajuk:"notifikasi6", keterangan:"fff", masa:""},
    { tajuk:"notifikasi7", keterangan:"ggg", masa:""},
  ]

}
