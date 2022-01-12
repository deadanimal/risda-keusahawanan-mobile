import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { map } from 'rxjs/operators';
import { BuletinService } from 'src/app/services/buletin/buletin.service';
import { KatalogService } from 'src/app/services/katalog/katalog.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  katalog: any;
  buletin: any;

  constructor(
    private loadingController : LoadingController,
    private katalogService: KatalogService,
    private buletinService: BuletinService,
  ) { }

  ngOnInit() {
    // this.refresh();
    const firstTime = localStorage.getItem('key')
    if (!firstTime) {
      localStorage.setItem('key', 'loaded')
      location.reload()
    } else {
      localStorage.removeItem('key')
    }

    this.getKatalog();
    this.getBuletin();
  }

  getKatalog() {


    this.katalogService.getAll().pipe(map(x => x.filter(i => i.status_katalog == "publish"))).subscribe((res) => {
      // this.daerahService.get().subscribe((res) => {
      console.log("res", res.slice(0,5));
      this.katalog = res.slice(0,5);
      
    });

  }

  getBuletin() {

    this.buletinService.getAll().pipe(map(x => x.filter(i => i.status == "aktif"))).subscribe((res) => {
      // this.daerahService.get().subscribe((res) => {
      console.log("res", res);
      this.buletin = res.slice(0,3);
      
    });

  }

  // refresh(): void {
  //   window.location.reload();
  // }

}
