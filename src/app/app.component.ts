import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Aliran Tunai', url: '/aliran-tunai', icon: 'assets/icon/ALIRAN-TUNAI-icon.png' },
    { title: 'Buku tunai', url: '#', icon: 'assets/icon/buku-tunai-icon.png' },
    { title: 'Insentif', url: '/insentif', icon: 'assets/icon/insentif-icon.png' },
    { title: 'Lawatan', url: '#', icon: 'assets/icon/lawatan-icon.png' },
    { title: 'Penyata Untung Rugi', url: '#', icon: 'assets/icon/penyata-untung-rugi.png' },
    { title: 'Ringkasan lejar', url: '#', icon: 'assets/icon/ringkasan-lejar.png' },
    { title: 'Katalog', url: '#', icon: 'assets/icon/katalog.png' },
    { title: 'Jana Dokumen', url: '#', icon: 'assets/icon/jana-dokumen.png' },
    { title: 'Log Keluar', url: '#', icon: 'assets/icon/log-out-button.png' },
    { title: 'Dashboard', url: '/dashboard', icon: 'archive' },
    { title: 'Profil', url: '/profile', icon: 'heart' },
    { title: 'Insentif', url: '/insentif', icon: 'archive' },
    
    // { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
    // { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
    // { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    // { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    // { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    // { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  // constructor(private http: HttpClient) {
  //   // http.get('http://127.0.0.1:8000/api/user').subscribe(console.log)
  // }
  constructor(){}
}
