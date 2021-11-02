import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  usahawan_id = window.sessionStorage.getItem("usahawan_id");
  user_id = window.sessionStorage.getItem("user_id");
  role = window.sessionStorage.getItem("role");


  public appPages = [
    { title: 'Aliran Tunai', url: '/aliran-tunai', icon: 'assets/icon/ALIRAN-TUNAI-icon.png' },
    { title: 'Buku tunai', url: '/buku-tunai', icon: 'assets/icon/buku-tunai-icon.png' },
    { title: 'Insentif', url: '/insentif', icon: 'assets/icon/insentif-icon.png' },
    { title: 'Lawatan', url: 'lawatan-usahawan', icon: 'assets/icon/lawatan-icon.png' },
    { title: 'Penyata Untung Rugi', url: '/pnl', icon: 'assets/icon/penyata-untung-rugi.png' },
    { title: 'Ringkasan lejar', url: '/ringkasan-lejar', icon: 'assets/icon/ringkasan-lejar.png' },
    { title: 'Katalog', url: 'katalog', icon: 'assets/icon/katalog.png' },
    { title: 'Jana Dokumen', url: '/jana-dokumen', icon: 'assets/icon/jana-dokumen.png' },
    { title: 'Log Keluar', url: '#', icon: 'assets/icon/log-out-button.png' },
  ];

  public appPagesPegawai = [
    { title: 'Carian', url: '#', icon: 'assets/icon/search-button.png' },
    { title: 'Lawatan', url: '/lawatan-pegawai', icon: 'assets/icon/lawatan-icon.png' },
    { title: 'Katalog', url: '/katalog-pegawai', icon: 'assets/icon/katalog.png' },
    { title: 'Buletin', url: '/buletin', icon: 'assets/icon/buletin.png' },
    { title: 'Log Keluar', url: '#', icon: 'assets/icon/log-out-button.png' },
    
  ];
  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  // constructor(private http: HttpClient) {
  //   // http.get('http://127.0.0.1:8000/api/user').subscribe(console.log)
  // }
  constructor(){
    console.log("role", this.role)
  }
}
