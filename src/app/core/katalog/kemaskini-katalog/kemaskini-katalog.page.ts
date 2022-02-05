import { Component, Input, OnInit } from '@angular/core';
import { AlertController, LoadingController, ModalController } from '@ionic/angular';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { KatalogService } from 'src/app/services/katalog/katalog.service';
import * as moment from 'moment';
import { StokService } from 'src/app/services/stok/stok.service';
import { map } from 'rxjs/operators';


interface LocalFile {
  name: string;
  path: string;
  data: string;
}

@Component({
  selector: 'app-kemaskini-katalog',
  templateUrl: './kemaskini-katalog.page.html',
  styleUrls: ['./kemaskini-katalog.page.scss'],
})
export class KemaskiniKatalogPage implements OnInit {

  @Input() katalog: any;

  private form: FormGroup;

  usahawan_id = window.sessionStorage.getItem("usahawan_id");
  user_id = window.sessionStorage.getItem("user_id");

  constructor(
    public modalController: ModalController,
    private formBuilder: FormBuilder,
    private katalogService: KatalogService,
    public loadingController: LoadingController,
    public alertController: AlertController,
    private stokService: StokService,
  ) {
    this.form = this.formBuilder.group({
      id_pengguna: ['',],
      nama_produk: ['', Validators.required],
      kandungan_produk: ['', Validators.required],
      harga_produk: ['', Validators.required],
      berat_produk: ['', Validators.required],
      keterangan_produk: ['', Validators.required],

      gambar_url: ['', Validators.required],
      baki_stok: ['',],
      unit_production: ['', Validators.required],
      status_katalog: ['', Validators.required],
      // disahkan_oleh: ['', Validators.required],
      modified_by: ['',],
    });
  }

  ngOnInit() {
    this.images = [];

    console.log("katalog", this.katalog)
    this.setFormValues();
  }

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  updateBakiStok() {

    this.stokService.getStokKatalog().pipe(map(x => x.filter(i => i.id_katalog == this.katalog.id))).subscribe((res) => {
      console.log("stok", res);

      let totalStok = 0;
      res.forEach(element => {
        totalStok += Number(element.stok_dijual);
      });

      console.log("total", totalStok);
      let bakiStok = this.form.value.unit_production - totalStok;

      console.log("baki", bakiStok);

      this.form.patchValue({

        baki_stok: bakiStok
        // unit_production: this.form.value.unit_production,

      });

    });



  }

  setFormValues() {

    this.form.patchValue({
      id_pengguna: this.katalog.id_pengguna,
      nama_produk: this.katalog.nama_produk,
      kandungan_produk: this.katalog.kandungan_produk,
      harga_produk: this.katalog.harga_produk,
      berat_produk: this.katalog.berat_produk,
      keterangan_produk: this.katalog.keterangan_produk,

      baki_stok: this.katalog.unit_production,
      unit_production: this.katalog.unit_production,

      // status_katalog: this.katalog.status_katalog,
      gambar_url: this.katalog.gambar_url,
      modified_by: this.katalog.modified_by,
    });

    if (this.katalog.status_katalog == "publish") {
      this.form.patchValue({
        status_katalog: "pending"

      });
    } else {
      this.form.patchValue({
        status_katalog: this.katalog.status_katalog

      });
    }

    this.form.updateValueAndValidity();
  }

  async logForm() {


    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: '',
      message: 'Adakah anda setuju untuk menyimpan perubahan ini?',
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
          handler: async () => {
            console.log('Confirm Okay');

            this.form.value.tarikh_aliran = moment(this.form.value.tarikh_aliran).format('YYYY-MM-DD');

            // this.form.value.status_katalog 

            const loading = await this.loadingController.create({ message: 'Loading ...' });
            loading.present();
            console.log(this.form.value)

            this.katalogService.update(this.form.value, Number(this.katalog.id)).subscribe((res) => {
              console.log("updated data", res);
              loading.dismiss();
              this.presentAlert()
            });
          }
        }
      ]
    });

    await alert.present();

  }

  async onDelete() {

    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: '',
      message: 'Adakah anda setuju untuk memadam maklumat ini?',
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
          handler: async () => {
            console.log('Confirm Okay');

            const loading = await this.loadingController.create({ message: 'Deleting ...' });
            loading.present();
        
            this.katalogService.delete(this.katalog.id).subscribe((res) => {
              console.log("deleted", res);
              loading.dismiss();
              this.presentAlert2()
            });
          }
        }
      ]
    });

    await alert.present();


  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Kemaskini Berjaya',
      subHeader: 'Kemaskini Katalog Telah Berjaya',
      message: '',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);

    this.dismiss();
    this.refresh();
  }

  async presentAlert2() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Berjaya Dihapus',
      subHeader: 'Katalog Telah Berjaya Dihapus',
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

  url: any = 'assets/icon/image-not-available.png';
  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.katalog.gambar_url = event.target.result;
      }

      this.fileEvent(event);
    }
  }

  // Convert the base64 to blob data
  // and create  formData with it

  images: LocalFile[];
  async fileEvent(e) {

    this.images = []

    const files = e.target.files;
    const file = files[0];
    const filePath = files[0].size;
    const base64Data = await this.readAsBase64(file);

    const fileName = new Date().getTime() + '.jpeg';

    this.images.push({
      name: fileName,
      path: filePath,
      data: `${base64Data}`,
    });

    console.log("AAAA", this.images);
    this.form.patchValue({
      gambar_url:this.images[0].data
    })

  }

  // https://ionicframework.com/docs/angular/your-first-app/3-saving-photos
  private async readAsBase64(blob) {
    // Fetch the photo, read as a blob, then convert to base64 format
    // const response = await fetch(photo.webPath);
    // const blob = await response.blob();

    return (await this.convertBlobToBase64(blob)) as string;
  }

  convertBlobToBase64 = (blob: Blob) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = reject;
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.readAsDataURL(blob);
    });
}
