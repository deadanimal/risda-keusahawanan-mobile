import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { map } from 'rxjs/operators';
import { LawatanService } from 'src/app/services/lawatan/lawatan.service';
import { PengesahanTarikhLawatanPgwPage } from '../pengesahan-tarikh-lawatan-pgw/pengesahan-tarikh-lawatan-pgw.page';

@Component({
  selector: 'app-lawatan-usahawan',
  templateUrl: './lawatan-usahawan.page.html',
  styleUrls: ['./lawatan-usahawan.page.scss'],
})
export class LawatanUsahawanPage implements OnInit {

  
  user_id = window.sessionStorage.getItem("user_id");
  lawatan: any;
  laporan: any;

  constructor(
    public modalController: ModalController,
    private lawatanService: LawatanService,
    
  ) { }

  ngOnInit() {
    this.getLawatan();
  }

  async pengesahanLawatan(lawatan) {
    console.log("pengesahan lawatan");
    const modal = await this.modalController.create({
      component: PengesahanTarikhLawatanPgwPage,
      componentProps: { lawatan },
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  getLawatan(){

    this.lawatanService.getLawatanUsahawan(this.user_id).pipe(map(x => x.filter(i => i.status_lawatan != "selesai"))).subscribe((res) => {
      console.log("res", res);

      this.lawatan = res;
      // window.location.reload();
    });

    this.lawatanService.getLawatanUsahawan(this.user_id).pipe(map(x => x.filter(i => i.status_lawatan == "selesai"))).subscribe((res) => {
      console.log("res2", res);

      this.laporan = res;
      // window.location.reload();
      // this.lawatan
    });

  }
  

  

}
