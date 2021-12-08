import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AlertController, LoadingController, ModalController } from '@ionic/angular';
import { KatalogService } from 'src/app/services/katalog/katalog.service';

@Component({
  selector: 'app-maklumat-produk',
  templateUrl: './maklumat-produk.page.html',
  styleUrls: ['./maklumat-produk.page.scss'],
})
export class MaklumatProdukPage implements OnInit {

  @Input() katalog: any;

  constructor(
    public modalController: ModalController,
    private katalogService: KatalogService,
    public loadingController: LoadingController,
    public alertController: AlertController,
  ) { }

  ngOnInit() {
    console.log("katalog", this.katalog)
  }

  gambar_url = "assets/img/pic1.jpeg";

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  async pengesahan() {
    const loading = await this.loadingController.create({message:'Disahkan ...'});
    loading.present();
    
    this.katalogService.pengesahanPegawai(this.katalog.katalog_id).subscribe((res) => {
      console.log("updated",res);
      loading.dismiss();
      this.presentAlert2()
    });

  }

  async presentAlert2() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Berjaya Disahkan',
      subHeader: 'Katalog Telah Disahkan',
      message: '',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);

    this.dismiss();
    this.refresh();
  }

  refresh(): void {
    window.location.reload();
  }
}
