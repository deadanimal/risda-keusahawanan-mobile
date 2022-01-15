import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { map } from 'rxjs/operators';
import { BuletinService } from 'src/app/services/buletin/buletin.service';
import { KatalogService } from 'src/app/services/katalog/katalog.service';
import { ShowBuletinPage } from './show-buletin/show-buletin.page';
import { ShowKatalogPage } from './show-katalog/show-katalog.page';
import { Router } from '@angular/router';

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
    public modalController: ModalController,
    private router: Router
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

  async getKatalog() {

    const loading = await this.loadingController.create({ message: 'Loading ...' });
    loading.present();

    this.katalogService.getAll().pipe(map(x => x.filter(i => i.status_katalog == "publish"))).subscribe((res) => {
      // this.daerahService.get().subscribe((res) => {
      console.log("res", res.slice(0,5));
      this.katalog = res.slice(0,5);

      loading.dismiss();
      
    });

  }

  async getBuletin() {

    const loading = await this.loadingController.create({ message: 'Loading ...' });
    loading.present();

    this.buletinService.getAll().pipe(map(x => x.filter(i => i.status == "aktif"))).subscribe((res) => {
      // this.daerahService.get().subscribe((res) => {
      console.log("res", res);
      this.buletin = res.slice(0,3);
      
      loading.dismiss();
    });

  }

  async lihatBuletin(buletin: any) {
    // console.log("kemaskini Katalog");
    const modal = await this.modalController.create({
      component: ShowBuletinPage,
      componentProps: { buletin },
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  async lihatKatalog(katalog: any) {
    console.log("kemaskini Katalog");
    const modal = await this.modalController.create({
      component: ShowKatalogPage,
      componentProps: { katalog },
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  SenaraiKatalog(){
    this.router.navigate(['/dashboard/senarai-katalog'])
  }

  SenaraiBuletin(){
    this.router.navigate(['/dashboard/senarai-buletin'])
  }

  // refresh(): void {
  //   window.location.reload();
  // }

}
