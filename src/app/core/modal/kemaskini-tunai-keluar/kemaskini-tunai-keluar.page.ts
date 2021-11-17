import { Component, Input, OnInit } from '@angular/core';
import { AlertController, LoadingController, ModalController } from '@ionic/angular';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { KategoriAliranService } from 'src/app/services/kategoriAliran/kategori-aliran.service';
import { Router } from '@angular/router';
import { AliranService } from 'src/app/services/Aliran/aliran.service';
import { map } from 'rxjs/operators';
import * as moment from 'moment';

@Component({
  selector: 'app-kemaskini-tunai-keluar',
  templateUrl: './kemaskini-tunai-keluar.page.html',
  styleUrls: ['./kemaskini-tunai-keluar.page.scss'],
})
export class KemaskiniTunaiKeluarPage implements OnInit {

  // @Input() tunai_masuk: any;
  @Input() tunai_keluar: any;

  data: any;

  private form: FormGroup;

  constructor(
    private modalController: ModalController,
    private formBuilder: FormBuilder,
    private kategoriAliranService: KategoriAliranService,
    private aliranService: AliranService,
    private router: Router,
    public alertController: AlertController,
    public loadingController: LoadingController
  ) {
    this.form = this.formBuilder.group({
      id_pengguna: [''],
      id_kategori_aliran: ['', Validators.required],
      tarikh_aliran: ['', Validators.required],
      keterangan_aliran: ['', Validators.required],
      jumlah_aliran: ['', Validators.required],
      dokumen_lampiran: [''],
    });
  }

  ngOnInit() {
    console.log("tunai_keluar", this.tunai_keluar)

    this.getKategoriAliran();
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  kategori_aliran_masuk: any;
  getKategoriAliran() {

    this.kategoriAliranService.getKategoriAliran().pipe(map(x => x.filter(i => i.jenis_aliran == "tunai_keluar"))).subscribe((res) => {
      console.log("kategori aliran", res);
      this.kategori_aliran_masuk = res;
      console.log("kategori aliran", this.kategori_aliran_masuk);

      this.setFormValues();
    });

  }

  refresh(): void {
    window.location.reload();
  }

  setFormValues(){
    this.form.setValue({
      id_pengguna: this.tunai_keluar.id_pengguna,
      id_kategori_aliran: this.tunai_keluar.id_kategori_aliran,
      tarikh_aliran: this.tunai_keluar.tarikh_aliran,
      keterangan_aliran: this.tunai_keluar.keterangan_aliran,
      jumlah_aliran: this.tunai_keluar.jumlah_aliran,
      dokumen_lampiran: this.tunai_keluar.dokumen_lampiran,
    });

    this.form.updateValueAndValidity();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Kemaskini Berjaya',
      subHeader: 'Kemaskini Aliran Keluar Telah Berjaya',
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
      subHeader: 'Aliran Telah Berjaya Dihapus',
      message: '',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);

    this.dismiss();
    this.refresh();
  }

  async logForm(){
    this.form.value.tarikh_aliran = moment(this.form.value.tarikh_aliran).format('YYYY-MM-DD');

    const loading = await this.loadingController.create({message:'Loading ...'});
    loading.present();
    console.log(this.form.value)

    this.aliranService.update(this.form.value, Number(this.tunai_keluar.id)).subscribe((res) => {
      console.log("updated data",res);
      loading.dismiss();
      this.presentAlert()
    });
  }

  async onDelete(){
    const loading = await this.loadingController.create({message:'Deleting ...'});
    loading.present();
    
    this.aliranService.delete(this.tunai_keluar.id).subscribe((res) => {
      console.log("deleted",res);
      loading.dismiss();
      this.presentAlert2()
    });
  }

}
