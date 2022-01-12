import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { map } from 'rxjs/operators';
import { KatalogService } from 'src/app/services/katalog/katalog.service';
import { ShowKatalogPage } from '../show-katalog/show-katalog.page';

@Component({
  selector: 'app-senarai-katalog',
  templateUrl: './senarai-katalog.page.html',
  styleUrls: ['./senarai-katalog.page.scss'],
})
export class SenaraiKatalogPage implements OnInit {
  katalog: any;

  constructor(
    private katalogService : KatalogService,
    public modalController: ModalController,
  ) { }

  ngOnInit() {
    this.getKatalog()
  }

  getKatalog() {
    this.katalogService.getAll().pipe(map(x => x.filter(i => i.status_katalog == "publish"))).subscribe((res) => {
      // this.daerahService.get().subscribe((res) => {
      console.log("res", res);
      this.katalog = res;
      
    });

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

}
