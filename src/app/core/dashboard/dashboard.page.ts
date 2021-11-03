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

  img_info = [
    { url:"/assets/img/pic1.jpeg", name:"pic 1" },
    { url:"/assets/img/pic2.jpeg", name:"pic 2" },
    { url:"/assets/img/pic3.jpeg", name:"pic 3" },
    { url:"/assets/img/pic4.jpeg", name:"pic 4" },
    { url:"/assets/img/pic5.jpeg", name:"pic 5" },
  ]

  // refresh(): void {
  //   window.location.reload();
  // }

}
