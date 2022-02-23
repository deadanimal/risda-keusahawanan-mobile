import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { PegawaiService } from './services/pegawai/pegawai.service';
import { UsahawanService } from './services/usahawan/usahawan.service';
import { NotifikasiService } from './services/notifikasi/notifikasi.service';
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
    { title: 'Profil', url: '/profile', icon: 'assets/new-icon/Profil.png' },
    { title: 'Insentif', url: '/insentif', icon: 'assets/new-icon/Insentif.png' },
    { title: 'Aliran Tunai', url: '/aliran-tunai', icon: 'assets/new-icon/Aliran-Tunai.png' },
    { title: 'Buku tunai', url: '/buku-tunai', icon: 'assets/new-icon/Buku-Tunai.png' },
    { title: 'Ringkasan lejar', url: '/ringkasan-lejar', icon: 'assets/new-icon/Ringkasan-Lejar.png' },
    { title: 'Penyata Untung Rugi', url: '/pnl', icon: 'assets/new-icon/Penyata-Untung-Rugi.png' },
    { title: 'Katalog', url: 'katalog', icon: 'assets/new-icon/Katalog.png' },
    { title: 'Jana Dokumen', url: '/jana-dokumen', icon: 'assets/new-icon/Jana-Dokumen.png' },
    { title: 'Lawatan', url: 'lawatan-usahawan', icon: 'assets/new-icon/Lawatan.png' },
    // { title: 'Log Keluar',  url: '#', icon: 'assets/new-icon/log-out-button.png' },
  ];

  public appPagesPegawai = [
    { title: 'Carian', url: '/carian', icon: 'assets/new-icon/Carian.png' },
    { title: 'Lawatan', url: '/lawatan-pegawai', icon: 'assets/new-icon/Lawatan.png' },
    { title: 'Katalog', url: '/katalog-pegawai', icon: 'assets/new-icon/Katalog.png' },
    // { title: 'Buletin', url: '/buletin', icon: 'assets/new-icon/Buletin.png' },
    // { title: 'Log Keluar', url: '#', icon: 'assets/new-icon/log-out-button.png' },
  ];
  


  constructor(
    private router: Router,
    private pegawaiService: PegawaiService,
    private usahawanService: UsahawanService,
    private notiService: NotifikasiService
  ) {

  }

  ngOnInit() {
    console.log("role", this.role)
    console.log("usahawan_id", this.usahawan_id)
    console.log("pegawai_id", this.pegawai_id)
    console.log("peranan_pegawai", this.peranan_pegawai)
    console.log("user_id", this.user_id)

    if (this.usahawan_id == null && this.pegawai_id != null) {
      this.getpegawai();
    } else {
      this.getusahawan();
    }

    if (this.peranan_pegawai == "7") {
      this.appPagesPegawai[1].url = "/lawatan-pegawai";
      console.log("peranan_pegawai success", this.appPagesPegawai[1])
    } else {
      this.appPagesPegawai[1].url = "/senarai-laporan-pegawai";
      console.log("peranan_pegawai success", this.appPagesPegawai[1])
    }

    if (this.peranan_pegawai == "1") {
      this.appPagesPegawai.push(
        { title: 'Buletin', url: '/buletin', icon: 'assets/new-icon/Buletin.png' },
      )
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

  // usahawan: any;
  gambar_usahawan : any;
  getusahawan(){
    this.usahawanService.show(this.usahawan_id).subscribe((res) => {
      console.log("AAAAAA", res);
      this.gambar_usahawan = res.gambar_url
    });
  }

  


  profil(){
    this.router.navigate(['/profile'])
  }

 
}
