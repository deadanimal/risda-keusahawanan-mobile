import { Component, OnInit } from '@angular/core';
import { NotifikasiService } from 'src/app/services/notifikasi/notifikasi.service';

@Component({
  selector: 'app-notifikasi',
  templateUrl: './notifikasi.page.html',
  styleUrls: ['./notifikasi.page.scss'],
})
export class NotifikasiPage implements OnInit {

  usahawan_id = window.sessionStorage.getItem("usahawan_id");
  pegawai_id = window.sessionStorage.getItem("pegawai_id");
  user_id = window.sessionStorage.getItem("user_id");
  role = window.sessionStorage.getItem("role");
  peranan_pegawai= window.sessionStorage.getItem("peranan_pegawai");
  
  constructor(
    private notiService : NotifikasiService
  ) { }

  ngOnInit() {
    console.log("user_id", this.user_id);

    this.getNoti()
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


  getNoti(){
    this.notiService.get(this.user_id).subscribe((res) => {
      console.log("notification", res);

    });
  }

}
