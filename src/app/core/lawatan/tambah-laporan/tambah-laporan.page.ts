import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { LawatanService } from 'src/app/services/lawatan/lawatan.service';
import { map } from 'rxjs/operators';


interface LocalFile {
  name: string;
  path: string;
  data: string;
}

@Component({
  selector: 'app-tambah-laporan',
  templateUrl: './tambah-laporan.page.html',
  styleUrls: ['./tambah-laporan.page.scss'],
})
export class TambahLaporanPage implements OnInit {

  @Input() laporan: any;


  url: any ;
  
  private form: FormGroup;

  constructor(
    public modalController: ModalController,
    private formBuilder: FormBuilder,
    private lawatanService : LawatanService,
  ) {
    this.form = this.formBuilder.group({
      namausahawan: ['', Validators.required],
      tarikh_lawatan: [''],
      masa_lawatan: [''],
      id_tindakan_lawatan: ['', Validators.required],
      komen: ['', Validators.required],
      jenis_lawatan: ['', Validators.required],
      gambar_lawatan: ['', ],
    });
  }

  ngOnInit() {
    console.log("laporan", this.laporan);

    if(this.laporan.gambar_lawatan == null){
      this.url = 'assets/icon/image-not-available.png';
    } else{
      this.url = this.laporan.gambar_lawatan;
    }

    
    this.getTindakanLawatan();
  }

  setFormValues() {

    this.form.patchValue({
      namausahawan: this.laporan.namausahawan,
      tarikh_lawatan: this.laporan.tarikh_lawatan,
      masa_lawatan: this.laporan.masa_lawatan,
      id_tindakan_lawatan: this.laporan.id_tindakan_lawatan,
      komen: this.laporan.komen,
      jenis_lawatan: this.laporan.jenis_lawatan,
      // gambar_lawatan: this.laporan.gambar_lawatan,
    });

    this.form.updateValueAndValidity();
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  tindakanLawatan :any;
  getTindakanLawatan(){
    this.lawatanService.getTindakanLawatan().pipe(map(x => x.filter(i => i.status_tindakan_lawatan == "aktif"))).subscribe((res) => {
      console.log("tindakan lawatan", res);

      this.tindakanLawatan = res;

      this.setFormValues();
    });
  }

  logForm() {

    if (this.images.length > 0){
      this.form.value.gambar_lawatan = this.images[0].data;
    } else {
      this.form.value.gambar_lawatan = this.laporan.gambar_lawatan;
    }
    
    console.log(this.form.value.gambar_url)

    this.lawatanService.updateLaporan(this.form.value, this.laporan.lawatan_id).subscribe((res) => {
      console.log("updated", res);

      this.dismiss();
      window.location.reload();
    });
  }

  
  //image
  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target.result;
      }

      this.fileEvent(event);
    }
  }

  // Convert the base64 to blob data
  // and create  formData with it

  images: LocalFile[] = [];
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

    console.log("AAAA",this.images);
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
