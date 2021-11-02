import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lawatan-usahawan',
  templateUrl: './lawatan-usahawan.page.html',
  styleUrls: ['./lawatan-usahawan.page.scss'],
})
export class LawatanUsahawanPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  katalog = [
    { nama_produk: "Nama Usahawan", status_katalog: "publish", created_date:"12/12/2021"},
    { nama_produk: "Nama Usahawan", status_katalog: "draft", created_date:"1/2/2020"},
    { nama_produk: "Nama Usahawan", status_katalog: "pending", created_date:"5/10/2021"},
    { nama_produk: "Nama Usahawan", status_katalog: "pending", created_date:"22/6/2020"},
    { nama_produk: "Nama Usahawan", status_katalog: "publish", created_date:"3/2/2020"},
    { nama_produk: "Nama Usahawan", status_katalog: "publish", created_date:"12/12/2021"},
    { nama_produk: "Nama Usahawan", status_katalog: "draft", created_date:"1/2/2020"},
    { nama_produk: "Nama Usahawan", status_katalog: "pending", created_date:"5/10/2021"},
    { nama_produk: "Nama Usahawan", status_katalog: "pending", created_date:"22/6/2020"},
    { nama_produk: "Nama Usahawan", status_katalog: "publish", created_date:"3/2/2020"},
    { nama_produk: "Nama Usahawan", status_katalog: "publish", created_date:"12/12/2021"},
    { nama_produk: "Nama Usahawan", status_katalog: "draft", created_date:"1/2/2020"},
    { nama_produk: "Nama Usahawan", status_katalog: "pending", created_date:"5/10/2021"},
    { nama_produk: "Nama Usahawan", status_katalog: "pending", created_date:"22/6/2020"},
    { nama_produk: "Nama Usahawan", status_katalog: "publish", created_date:"3/2/2020"},
  ]

  

  

  pelanggan = [
    { nama_pelanggan: "Kamal", status_katalog: "publish", created_date: "12/12/2021" },
    { nama_pelanggan: "amin", status_katalog: "draft", created_date: "1/2/2020" },
    { nama_pelanggan: "zainur", status_katalog: "pending", created_date: "5/10/2021" },
    { nama_pelanggan: "amir", status_katalog: "pending", created_date: "22/6/2020" },
    { nama_pelanggan: "azri", status_katalog: "publish", created_date: "3/2/2020" },
    { nama_pelanggan: "niena", status_katalog: "publish", created_date: "12/12/2021" },
    { nama_pelanggan: "tasha", status_katalog: "draft", created_date: "1/2/2020" },
    { nama_pelanggan: "umie", status_katalog: "pending", created_date: "5/10/2021" },
    { nama_pelanggan: "boi", status_katalog: "pending", created_date: "22/6/2020" },
    { nama_pelanggan: "afiq", status_katalog: "publish", created_date: "3/2/2020" },
    { nama_pelanggan: "Alya", status_katalog: "publish", created_date: "12/12/2021" },
    { nama_pelanggan: "zainoor", status_katalog: "draft", created_date: "1/2/2020" },
    { nama_pelanggan: "hadi", status_katalog: "pending", created_date: "5/10/2021" },
    { nama_pelanggan: "ali", status_katalog: "pending", created_date: "22/6/2020" },
    { nama_pelanggan: "jemah", status_katalog: "publish", created_date: "3/2/2020" },
  ]

  

}
