import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { PegawaiService } from './services/pegawai/pegawai.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  usahawan_id = window.sessionStorage.getItem("usahawan_id");
  pegawai_id = window.sessionStorage.getItem("pegawai_id");
  user_id = window.sessionStorage.getItem("user_id");
  role = window.sessionStorage.getItem("role");
  peranan_pegawai= window.sessionStorage.getItem("peranan_pegawai");

  pegawai: any;

  public appPages = [
    { title: 'Aliran Tunai', url: '/aliran-tunai', icon: 'assets/icon/ALIRAN-TUNAI-icon.png' },
    { title: 'Buku tunai', url: '/buku-tunai', icon: 'assets/icon/buku-tunai-icon.png' },
    { title: 'Insentif', url: '/insentif', icon: 'assets/icon/insentif-icon.png' },
    { title: 'Lawatan', url: 'lawatan-usahawan', icon: 'assets/icon/lawatan-icon.png' },
    { title: 'Penyata Untung Rugi', url: '/pnl', icon: 'assets/icon/penyata-untung-rugi.png' },
    { title: 'Ringkasan lejar', url: '/ringkasan-lejar', icon: 'assets/icon/ringkasan-lejar.png' },
    { title: 'Katalog', url: 'katalog', icon: 'assets/icon/katalog.png' },
    { title: 'Jana Dokumen', url: '/jana-dokumen', icon: 'assets/icon/jana-dokumen.png' },
    // { title: 'Log Keluar',  url: '#', icon: 'assets/icon/log-out-button.png' },
  ];

  public appPagesPegawai = [
    { title: 'Carian', url: '#', icon: 'assets/icon/search-button.png' },
    { title: 'Lawatan', url: '/lawatan-pegawai', icon: 'assets/icon/lawatan-icon.png' },
    { title: 'Katalog', url: '/katalog-pegawai', icon: 'assets/icon/katalog.png' },
    { title: 'Buletin', url: '/buletin', icon: 'assets/icon/buletin.png' },
    // { title: 'Log Keluar', url: '#', icon: 'assets/icon/log-out-button.png' },
  ];
  


  constructor(
    private router: Router,
    private pegawaiService: PegawaiService
  ) {

  }

  ngOnInit() {
    console.log("role", this.role)
    console.log("usahawan_id", this.usahawan_id)
    console.log("pegawai_id", this.pegawai_id)
    console.log("peranan_pegawai", this.peranan_pegawai)

    if (this.usahawan_id == null && this.pegawai_id != null) {
      this.getpegawai();
    }

    if (this.peranan_pegawai == "7") {
      this.appPagesPegawai[1].url = "/lawatan-pegawai";
      console.log("peranan_pegawai success", this.appPagesPegawai[1])
    } else {
      this.appPagesPegawai[1].url = "/senarai-laporan-pegawai";
      console.log("peranan_pegawai success", this.appPagesPegawai[1])
    }


  }

  logout() {
    sessionStorage.clear();
    this.router.navigate(['/'])
      .then(() => {
        window.location.reload();
      });
  }


  getpegawai() {
    this.pegawaiService.get(this.pegawai_id).subscribe((res) => {
      console.log("res", res);
      this.pegawai = res.nama;
    });
  }


  profil(){
    this.router.navigate(['/profile'])
  }
  // profile() {
  //   this.router.navigate(['/profile']);
  // }
}
