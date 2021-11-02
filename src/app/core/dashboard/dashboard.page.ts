import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor() { }

  ngOnInit() {
    // this.refresh();
    const firstTime = localStorage.getItem('key')
    if (!firstTime) {
      localStorage.setItem('key', 'loaded')
      location.reload()
    } else {
      localStorage.removeItem('key')
    }
  }

  // refresh(): void {
  //   window.location.reload();
  // }

}
