import { Component, OnInit } from '@angular/core';

import { LoginService } from 'src/app/services/login/login.service';
import { Observable } from 'rxjs';
import { LoginModel } from 'src/app/services/login/login.model';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UsahawanService } from 'src/app/services/usahawan/usahawan.service';
import { UsahawanModel } from 'src/app/services/usahawan/usahawan.model';
// import { LoginModel } from 'src/app/services/login/login.model';
import { LoadingController, PopoverController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

import Swal from 'sweetalert2'
import { NegeriService } from 'src/app/services/negeri/negeri.service';
import { DaerahService } from 'src/app/services/daerah/daerah.service';
import { map } from 'rxjs/operators';
import { MukimService } from 'src/app/services/mukim/mukim.service';
import { ParlimenService } from 'src/app/services/parlimen/parlimen.service';
import { DunService } from 'src/app/services/dun/dun.service';
import { KampungService } from 'src/app/services/kampung/kampung.service';
import { SeksyenService } from 'src/app/services/seksyen/seksyen.service';
import { KategoriUsahawanService } from 'src/app/services/ketegori-usahawan/kategori-usahawan.service';
import { PusatTanggungjawabService } from 'src/app/services/pusat-tanggungjawab/pusat-tanggungjawab.service';
import { AliranService } from 'src/app/services/Aliran/aliran.service';

interface LocalFile {
  name: string;
  path: string;
  data: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  users$: Observable<LoginModel[]>;

  private form: FormGroup;

  usahawan_id = window.sessionStorage.getItem("usahawan_id");
  user_id = window.sessionStorage.getItem("user_id");

  negeri: any;
  daerah: any;
  mukim: any;

  jantina = [
    { name: "Lelaki", id: 1 },
    { name: "Perempuan", id: 2 },
    { name: "Ragu", id: 3 },
  ];

  bangsa = [
    { id: 1, name: "Melayu" },
    { id: 2, name: "Orang Asli Semenanjung" },
    { id: 3, name: "Bumiputera Sabah" },
    { id: 4, name: "Bumiputera Sarawak" },
    { id: 5, name: "Cina" },
    { id: 6, name: "India" },
    { id: 7, name: "Lain-lain" },
  ];

  statusperkahwinan = [
    { id: 1, name: "Tidak Pernah Berkahwin" },
    { id: 2, name: "Berkahwin" },
    { id: 3, name: "Balu / Duda" },
    { id: 4, name: "Bercerai" },
    { id: 5, name: "Berpisah" },
    { id: 9, name: "Tiada maklumat" },
  ];

  tahapPendidikan = [
    { id: 1, name: "Tidak Bersekolah" },
    { id: 2, name: "Sekolah Rendah / Setara" },
    { id: 3, name: "Sekolah Menengah / Setara" },
    { id: 4, name: "Kolej / Universiti / Setara" },
  ];

  statusDaftarUsahawan = [
    { id: "KP01", name:"PEKEBUN KECIL"},
    { id: "KP02", name:"SUAMI PEKEBUN KECIL"},
    { id: "KP03", name:"ISTERI PEKEBUN KECIL"},
    { id: "KP04", name:"ANAK PEKEBUN KECIL"},
  ]

  parlimen: any;
  dun: any;
  kampung: any;
  seksyen: any;
  kategoriUsahawan: any;
  pusatTanggungjawab: any;


  constructor(
    private usahawanService: UsahawanService,
    private loginService: LoginService,
    private router: Router,
    private user: LoginModel,
    private usahawan: UsahawanModel,
    private formBuilder: FormBuilder,
    private loadingController: LoadingController,
    public alertController: AlertController,
    private negeriService: NegeriService,
    private daerahService: DaerahService,
    private mukimService: MukimService,
    private parlimenService: ParlimenService,
    private dunService: DunService,
    private kampungService: KampungService,
    private seksyenService: SeksyenService,
    private kategoriUsahawanService: KategoriUsahawanService,
    private ptService: PusatTanggungjawabService,
    private aliranService: AliranService
  ) {

    this.form = this.formBuilder.group({
      Kod_PT: ['',],
      namausahawan: ['',],
      nokadpengenalan: ['',],
      tarikhlahir: ['',],
      U_Jantina_ID: ['', Validators.required],
      U_Bangsa_ID: ['', Validators.required],
      statusperkahwinan: ['', Validators.required],
      U_Pendidikan_ID: ['', Validators.required],
      alamat1: ['', Validators.required],
      alamat2: ['', Validators.required],
      alamat3: ['', Validators.required],
      bandar: ['', Validators.required],
      poskod: ['', Validators.required],
      U_Negeri_ID: ['', Validators.required],
      U_Daerah_ID: ['', Validators.required],
      U_Mukim_ID: ['', Validators.required],
      U_Parlimen_ID: ['', Validators.required],
      U_Dun_ID: ['', Validators.required],
      U_Kampung_ID: ['',],
      U_Seksyen_ID: ['',],
      id_kategori_usahawan: ['', Validators.required],
      gambar_url: ['',],
      notelefon: ['', Validators.required],
      nohp: ['', Validators.required],
      email: ['', Validators.required],
      status_daftar_usahawan: ['', ],
      usahawanid: ['', ],
      negeri_perniagaan: ['', ],
    })
  }

  ngOnInit() {


    // var getsession_id = window.sessionStorage.getItem("user_id");
    console.log("usahawan id", this.usahawan_id);
    console.log("user id", this.user_id);
    this.getUsahawan();

    this.getUser();

    this.getNegeri();
    this.getDaerah()
    this.getMukim();
    this.getParlimen()
    this.getDun()
    this.getKampung()
    this.getSeksyen()
    this.getKategoriUsahawan()
  }

  setFormValues() {
    this.form.patchValue({
      Kod_PT: this.usahawan.Kod_PT,
      namausahawan: this.usahawan.namausahawan,
      nokadpengenalan: this.usahawan.nokadpengenalan,
      tarikhlahir: this.usahawan.tarikhlahir,
      U_Jantina_ID: this.usahawan.U_Jantina_ID,
      U_Bangsa_ID: this.usahawan.U_Bangsa_ID,
      statusperkahwinan: this.usahawan.statusperkahwinan,
      U_Pendidikan_ID: this.usahawan.U_Pendidikan_ID,
      alamat1: this.usahawan.alamat1,
      alamat2: this.usahawan.alamat2,
      alamat3: this.usahawan.alamat3,
      bandar: this.usahawan.bandar,
      poskod: this.usahawan.poskod,
      U_Negeri_ID: this.usahawan.U_Negeri_ID,
      U_Daerah_ID: this.usahawan.U_Daerah_ID,
      U_Mukim_ID: this.usahawan.U_Mukim_ID,
      U_Parlimen_ID: this.usahawan.U_Parlimen_ID,
      U_Dun_ID: this.usahawan.U_Dun_ID,
      U_Kampung_ID: this.usahawan.U_Kampung_ID,
      U_Seksyen_ID: this.usahawan.U_Seksyen_ID,
      id_kategori_usahawan: this.usahawan.id_kategori_usahawan,
      gambar_url: this.usahawan.gambar_url,
      notelefon: this.usahawan.notelefon,
      nohp: this.usahawan.nohp,
      email: this.usahawan.email,
      status_daftar_usahawan: this.usahawan.status_daftar_usahawan,
      usahawanid: this.usahawan.usahawanid,
      negeri_perniagaan: this.usahawan.negeri_perniagaan,
    })

    
  }



  getUsahawan() {
    // console.log(this.form.value);
    this.usahawanService.show(this.usahawan_id).subscribe((res) => {
      console.log("usahawan info", res);

      if (Object.keys(res).length === 0) {
        console.log("failed")
      }
      else {
        this.usahawan = res;

        console.log("profile usahawan success")
        this.getPT()

        // this.calcBirthDate()

      }
    });

  }

  getUser() {
    // console.log(this.form.value);
    this.loginService.show(this.user_id).subscribe((res) => {
      // console.log("user info", res);

      if (Object.keys(res).length === 0) {
        console.log("failed")
      }
      else {
        this.user = res;
        console.log("user info", this.user)
        console.log("profile usahawan success")
      }

      this.getAliranJualan()
    });

  }

  getPT() {

    this.ptService.get().pipe(map(x => x.filter(i => i.Kod_PT == this.usahawan.Kod_PT))).subscribe((res) => {
      // this.daerahService.get().subscribe((res) => {

      // console.log("pt", res);
      this.pusatTanggungjawab = res[0].keterangan;
      console.log("pt", this.pusatTanggungjawab);

      
      this.setFormValues()

    });

  }

  getNegeri() {
    this.negeriService.get().subscribe((res) => {
      console.log("negeri", res);
      this.negeri = res

    });

  }

  getDaerah() {

    this.usahawan.U_Negeri_ID = this.form.value.U_Negeri_ID

    this.daerahService.get().pipe(map(x => x.filter(i => i.U_Negeri_ID == this.usahawan.U_Negeri_ID))).subscribe((res) => {
      // this.daerahService.get().subscribe((res) => {

      console.log("Daerah", res);
      this.daerah = res;

      // this.getParlimen();
    });

  }

  getMukim() {

    this.usahawan.U_Negeri_ID = this.form.value.U_Daerah_ID

    this.mukimService.get().pipe(map(x => x.filter(i => i.U_Daerah_ID == this.usahawan.U_Daerah_ID))).subscribe((res) => {
      // this.daerahService.get().subscribe((res) => {

      console.log("mukim", res);
      this.mukim = res;
    });
  }

  getParlimen() {

    this.usahawan.U_Negeri_ID = this.form.value.U_Negeri_ID

    this.parlimenService.get().pipe(map(x => x.filter(i => i.U_Negeri_ID == this.usahawan.U_Negeri_ID))).subscribe((res) => {
      // this.daerahService.get().subscribe((res) => {

      console.log("parlimen", res);
      this.parlimen = res;

    });
  }

  getDun() {
    this.usahawan.U_Parlimen_ID = this.form.value.U_Parlimen_ID

    this.dunService.get().pipe(map(x => x.filter(i => i.U_Parlimen_ID == this.usahawan.U_Parlimen_ID))).subscribe((res) => {
      // this.daerahService.get().subscribe((res) => {

      console.log("dun", res);
      this.dun = res;
    });
  }

  getKampung() {
    this.usahawan.U_Mukim_ID = this.form.value.U_Mukim_ID
    this.kampungService.get().pipe(map(x => x.filter(i => i.U_Mukim_ID == this.usahawan.U_Mukim_ID))).subscribe((res) => {
      // this.daerahService.get().subscribe((res) => {

      console.log("kampung", res);
      this.kampung = res;
    });
  }

  getSeksyen() {
    this.usahawan.U_Mukim_ID = this.form.value.U_Mukim_ID
    this.seksyenService.get().pipe(map(x => x.filter(i => i.U_Mukim_ID == this.usahawan.U_Mukim_ID))).subscribe((res) => {
      // this.daerahService.get().subscribe((res) => {

      console.log("seksyen", res);
      this.seksyen = res;
    });
  }

  getKategoriUsahawan() {

    this.kategoriUsahawanService.get().subscribe((res) => {
      // this.daerahService.get().subscribe((res) => {

      console.log("kategori usahawan", res);
      this.kategoriUsahawan = res;
    });
  }

  getAliranJualan() {

    this.aliranService.get(this.user_id).pipe(map(x => x.filter(i => i.kategori_aliran == "JUALAN/PEROLEHAN"))).subscribe((res) => {
      // this.daerahService.get().subscribe((res) => {

      console.log("aliran", res);
      
      let sum = 0;
      res.forEach(element => {
        sum+= element.jumlah_aliran;
      });

      if(sum < 60000){
        //pico
        this.form.patchValue({
          id_kategori_usahawan: "KU01"
        })
      } else if(sum >= 60000 && sum < 150000){
        // nano
        this.form.patchValue({
          id_kategori_usahawan: "KU02"
        })
      } else if(sum >= 150000 && sum < 300000){
        //micro
        this.form.patchValue({
          id_kategori_usahawan: "KU03"
        })
      } else if(sum >= 300000 && sum < 15000000	){
        //kecil
        this.form.patchValue({
          id_kategori_usahawan: "KU04"
        })
      } else if(sum >= 300000 && sum < 15000000	){
        // sederhana
        this.form.patchValue({
          id_kategori_usahawan: "KU05"
        })
      }
      console.log("sum", sum)
    });
  }

  // calcBirthDate(){

  //   let year = this.usahawan.nokadpengenalan.substring(0,2);
  //   let month = this.usahawan.nokadpengenalan.substring(2,4);
  //   let date = this.usahawan.nokadpengenalan.substring(4,6);

  //   if(Number(year) > 40){
  //     year = 19+year;
  //   } else {
  //     year = 20+year;
  //   }
  //   let birthday = date +'/'+month+'/'+year

  //   this.usahawan.tarikhlahir = birthday
  // }

  async logForm() {
    const loading = await this.loadingController.create({ message: 'Loading ...' });
    loading.present();

    this.form.value.gambar_url = this.usahawan.gambar_url;
    console.log(this.form.value)

    this.usahawanService.update(this.usahawan_id, this.form.value).subscribe((res) => {
      console.log(res);

      loading.dismiss();

      this.presentAlert()
    });
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Kemaskini Berjaya',
      subHeader: 'Kemaskini Maklumat Usahawan Telah Berjaya',
      message: '',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }


  url: any
  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target.result;
        this.usahawan.gambar_url = this.url;
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
