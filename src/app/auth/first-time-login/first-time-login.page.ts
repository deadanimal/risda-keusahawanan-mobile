import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-first-time-login',
  templateUrl: './first-time-login.page.html',
  styleUrls: ['./first-time-login.page.scss'],
})
export class FirstTimeLoginPage implements OnInit {

  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: '',
      message: 'Adakah anda setuju untuk mengemaskini alamat email dan kata laluan?',
      buttons: [
        {
          text: 'Tidak',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Ya',
          cssClass:"yes-custom",
          handler: () => {
            console.log('Confirm Okay');
            this.presentAlert();

          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Berjaya!',
      // subHeader: 'Subtitle',
      message: 'Kemaskini telah berjaya',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

}
