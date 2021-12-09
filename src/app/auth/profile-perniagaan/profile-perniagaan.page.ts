import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { LoginModel } from 'src/app/services/login/login.model';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PerniagaanModel } from 'src/app/services/perniagaan/perniagaan.model';
import { PerniagaanService } from 'src/app/services/perniagaan/perniagaan.service';
import { AlertController, LoadingController } from '@ionic/angular';
import { map } from 'rxjs/operators';
import { DaerahService } from 'src/app/services/daerah/daerah.service';
import { DunService } from 'src/app/services/dun/dun.service';
import { KampungService } from 'src/app/services/kampung/kampung.service';
import { MukimService } from 'src/app/services/mukim/mukim.service';
import { NegeriService } from 'src/app/services/negeri/negeri.service';
import { ParlimenService } from 'src/app/services/parlimen/parlimen.service';
import { SeksyenService } from 'src/app/services/seksyen/seksyen.service';

@Component({
  selector: 'app-profile-perniagaan',
  templateUrl: './profile-perniagaan.page.html',
  styleUrls: ['./profile-perniagaan.page.scss'],
})


export class ProfilePerniagaanPage implements OnInit {

  form: FormGroup;

  usahawan_id = window.sessionStorage.getItem("usahawan_id");
  user_id = window.sessionStorage.getItem("user_id");

  jenis_perniagaan = [
    { id:"A",	name:"PENGELUARAN PRODUK MAKANAN"},
    { id:"B",	name:"PENGELUARAN PRODUK BUKAN MAKANAN"},
    { id:"C",	name:"PENGELUARAN PRODUK PERTANIAN"},
    { id:"D",	name:"PERKHIDMATAN PEMASARAN"},
    { id:"E",	name:"PERKHIDMATAN BUKAN PEMASARAN"},
  ]

  klusterPerniagaan = [
    { id:"A1", name: "KLUSTER MAKANAN RINGAN/SEGERA"},
    { id:"A2", name: "KLUSTER MAKANAN TRADISIONAL"},
    { id:"A3", name: "KLUSTER MAKANAN SEJUK BEKU"},
    { id:"A4", name: "KLUSTER MAKANAN KEK/ROTI/BISKUT"},
    { id:"A5", name: "KLUSTER MAKANAN REMPAH RATUS/BAHAN MASAKAN"},
    { id:"A6", name: "KLUSTER MAKANAN PERENCAH/PENCICAH/SOS"},
    { id:"A7", name: "KLUSTER MINUMAN/KORDIAL"},
    { id:"B1", name: "KLUSTER PRODUK BERASASKAN KAYU/POKOK"},
    { id:"B2", name: "KLUSTER PRODUK BERASASKAN LOGAM"},
    { id:"B3", name: "KLUSTER PRODUK BERASASKAN TANAH LIAT/PASIR"},
    { id:"B4", name: "KLSUTER PRODUK BERASASKAN BAHAN BINAAN"},
    { id:"B5", name: "KLUSTER PRODUK BERASASKAN TEKSTIL/KEKABU"},
    { id:"B6", name: "KLUSTER PRODUK BERASASKAN GETAH/SAWIT"},
    { id:"B7", name: "KLUSTER PRODUK BERASASKAN BAHAN ORGANIK/TUMBUHAN/HAIWAN"},
    { id:"C1", name: "KLUSTER TANAMAN"},
    { id:"C2", name: "KLUSTER TERNAKAN"},
    { id:"C3", name: "KLUSTER AKUAKULTUR"},
    { id:"D1", name: "KLUSTER RAKAN STRATEGIK PEMASARAN"},
    { id:"D2", name: "KLUSTER RAKAN PEMASARAN"},
    { id:"D3", name: "KLUSTER PENGEDAR"},
    { id:"D4", name: "KLUSTER STOKIS"},
    { id:"D5", name: "KLUSTER AGEN"},
    { id:"E1", name: "KLUSTER ANDAMAN & BUTIK"},
    { id:"E2", name: "KLUSTER BENGKEL BAIKI KENDERAAN"},
    { id:"E3", name: "KLUSTER BENGKEL CUCI KENDERAAN"},
    { id:"E4", name: "KLUSTER BENGKEL JAHITAN"},
    { id:"E5", name: "KLUSTER BENGKEL KIMPALAN/BESI/KACA"},
    { id:"E6", name: "KLUSTER DOBI"},
    { id:"E7", name: "KLUSTER FOTOGRAFI"},
    { id:"E8", name: "KLUSTER HOMESTAY/RESORT"},
    { id:"E9", name: "KLUSTER KATERING & KANOPI"},
    { id:"E10", name: "KLUSTER KEDAI BAIKI BARANG ELEKTRIK/ELEKTRONIK"},
    { id:"E11", name: "KLUSTER KEDAI GUNTING RAMBUT"},
    { id:"E12", name: "KLUSTER KEDAI KRAFTANGAN/CENDERAHATI"},
    { id:"E13", name: "KLUSTER KEDAI MAKAN/FOOD TRUCK/KIOSK"},
    { id:"E14", name: "KLUSTER KEDAI PAKAIAN/KASUT/BEG"},
    { id:"E15", name: "KLUSTER KEDAI RUNCIT/BARANG BASAH"},
    { id:"E16", name: "KLUSTER KONTRAKTOR BINAAN"},
    { id:"E17", name: "KLUSTER LOGISTIK & PENGANGKUTAN"},
    { id:"E18", name: "KLUSTER NURSERI"},
    { id:"E19", name: "KLUSTER ONLINE SERVIS/CYBERCAFE"},
    { id:"E20", name: "KLUSTER PENDAWAIAN ELEKTRIK"},
    { id:"E21", name: "KLUSTER PENYELENGGARAAN KEBUN"},
    { id:"E22", name: "KLUSTER PERCETAKAN DAN PENGIKLANAN"},
    { id:"E23", name: "KLUSTER PROSES AYAM"},
    { id:"E24", name: "KLUSTER PROSES BAJA"},
    { id:"E25", name: "KLUSTER PROSES SANTAN"},
    { id:"E26", name: "KLUSTER SEWA BOT"},
    { id:"E27", name: "KLUSTER SEWA KANOPI"},
    { id:"E28", name: "KLUSTER SEWA KERETA KUDA"},
    { id:"E29", name: "KLUSTER SEWA AUDIO VISUAL SISTEM/ALAT SIARAYA/DJ"},
    { id:"E30", name: "KLUSTER SPA KECANTIKAN/KESIHATAN"},
    { id:"E31", name: "KLUSTER TASKA"},
    { id:"E32", name: "KLUSTER URUTAN/REFLEKSOLOGI"},
    { id:"E33", name: "KLUSTER KLINIK HAIWAN"},
    { id:"E34", name: "KLUSTER KEDAI PERKAKAS/PERALATAN/MAKANAN HAIWAN"},
    { id:"E35", name: "KLUSTER KEDAI BAIKI PERABOT/KUSYEN/KANVAS"},
    { id:"E36", name: "KLUSTER KEDAI BAIKI PERALATAN KEJURUTERAAN/MESIN"},
    { id:"E37", name: "KLUSTER KEDAI KELENGKAPAN IBU & ANAK"},
    { id:"E38", name: "KLUSTER PENGURUS MAJLIS/ACARA/PERANCANG PERKAHWINAN"},
    { id:"E39", name: "KLUSTER TUKANG KASUT"},
    { id:"E40", name: "KLUSTER TUKANG KUNCI"},
    { id:"E41", name: "KLUSTER PUSAT TUSYEN/LATIHAN"},
    { id:"E42", name: "KLUSTER PELUKIS/MURAL/KALIGRAFI"},
    { id:"E43", name: "KLUSTER PENYEMBUR RACUN SERANGGA"},
    { id:"E44", name: "KLUSTER PEMBEKAL GAS LPG"},
    { id:"E45", name: "KLUSTER PEMASANGAN GIGI PALSU"},
    { id:"E46", name: "KLUSTER STUDIO & PRODUKSI"},
    { id:"E47", name: "KLUSTER PEMBUNGKUSAN MAKANAN"},
    { id:"E48", name: "KLUSTER DEPO GETAH/URUSNIAGA GETAH"},
    { id:"F", name: "LAIN-LAIN"},
  ]

  negeri: any;
  daerah:any;
  mukim: any;
  parlimen: any;
  dun: any;
  kampung: any;
  seksyen: any;

  constructor(
    private perniagaanService: PerniagaanService,
    private router: Router,
    private perniagaan: PerniagaanModel,
    public alertController: AlertController,
    private loadingController: LoadingController,
    private formBuilder: FormBuilder,
    private negeriService: NegeriService,
    private daerahService: DaerahService,
    private mukimService: MukimService,
    private parlimenService: ParlimenService,
    private dunService: DunService,
    private kampungService: KampungService,
    private seksyenService: SeksyenService,
  ) { 
    this.form = this.formBuilder.group({
      jenisperniagaan: ['',Validators.required],
      klusterperniagaan:  ['',Validators.required],
      subkluster:  ['',Validators.required],
      alamat1:  ['',Validators.required],
      alamat2:  ['',Validators.required],
      alamat3:  ['',Validators.required],
      bandar:  ['',Validators.required],
      poskod:  ['',Validators.required],
      U_Negeri_ID:  ['',Validators.required],
      U_Daerah_ID:  ['',Validators.required],
      U_Mukim_ID:  ['',Validators.required],
      U_Parlimen_ID:  ['',Validators.required],
      U_Dun_ID:  ['',Validators.required],
      U_Kampung_ID:  ['',],
      U_Seksyen_ID:  ['',],
      latitud:  ['',Validators.required],
      logitud:  ['',Validators.required],
      facebook:  ['',Validators.required],
      instagram:  ['',],
      twitter:  ['',],
      lamanweb:  ['',],
      dropship:  ['',],
      ejen:  ['',],
      stokis:  ['',],
      outlet:  ['',],
      domestik:  ['',],
      luarnegara:  ['',],
      pasaranonline:  ['',],
      purata_jualan_bulanan:  ['',],
      peratus_kenaikan:  ['',],
      hasil_jualan_tahunan:  ['',],
    })
  }

  ngOnInit() {

    console.log("usahawan id", this.usahawan_id);
    console.log("user id", this.user_id);

    this.getPerniagaan();

   
  }

  groups = [
    {
      title: 'Dynamic Group Header - 1',
      content: 'Dynamic Group Body - 1'
    },
    {
      title: 'Dynamic Group Header - 2',
      content: 'Dynamic Group Body - 2'
    }
  ];

  addGroupItem(): void {
    this.groups.push({
      title: `Dynamic Group Header - ${this.groups.length + 1}`,
      content: `Dynamic Group Body - ${this.groups.length + 1}`
    });
  }

  removeItem(): void {
    this.groups = this.groups.slice(0, this.groups.length - 1);
  }

  getPerniagaan() {
    // console.log(this.form.value);
    this.perniagaanService.show(this.usahawan_id).subscribe((res) => {
      console.log("perniagaan info", res);

      if (Object.keys(res).length === 0) {
        console.log("failed")
      }
      else {
        this.perniagaan = res;

        console.log("profile perniagaan success")
        this.setFormValues();

      }
    });

  }

  setFormValues(){
    this.form.setValue({
      jenisperniagaan: this.perniagaan.jenisperniagaan,
      klusterperniagaan:  this.perniagaan.klusterperniagaan,
      subkluster:  this.perniagaan.subkluster,
      alamat1:  this.perniagaan.alamat1,
      alamat2:  this.perniagaan.alamat2,
      alamat3:  this.perniagaan.alamat3,
      bandar:  this.perniagaan.bandar,
      poskod:  this.perniagaan.poskod,
      U_Negeri_ID:  this.perniagaan.U_Negeri_ID,
      U_Daerah_ID:  this.perniagaan.U_Daerah_ID,
      U_Mukim_ID:  this.perniagaan.U_Mukim_ID,
      U_Parlimen_ID:  this.perniagaan.U_Parlimen_ID,
      U_Dun_ID:  this.perniagaan.U_Dun_ID,
      U_Kampung_ID:  this.perniagaan.U_Kampung_ID,
      U_Seksyen_ID:  this.perniagaan.U_Seksyen_ID,
      latitud:  this.perniagaan.latitud,
      logitud:  this.perniagaan.logitud,
      facebook:  this.perniagaan.facebook,
      instagram:  this.perniagaan.instagram,
      twitter:  this.perniagaan.twitter,
      lamanweb:  this.perniagaan.lamanweb,
      dropship:  this.perniagaan.dropship,
      ejen:  this.perniagaan.ejen,
      stokis:  this.perniagaan.stokis,
      outlet:  this.perniagaan.outlet,
      domestik:  this.perniagaan.domestik,
      luarnegara:  this.perniagaan.luarnegara,
      pasaranonline:  this.perniagaan.pasaranonline,
      purata_jualan_bulanan:  this.perniagaan.purata_jualan_bulanan,
      peratus_kenaikan:  this.perniagaan.peratus_kenaikan,
      hasil_jualan_tahunan:  this.perniagaan.hasil_jualan_tahunan
    })

    this.getNegeri();
    this.getDaerah(this.perniagaan.U_Negeri_ID)
    this.getMukim(this.perniagaan.U_Daerah_ID);
    this.getParlimen()
    this.getDun()
    this.getKampung()
    this.getSeksyen()
  }

  getNegeri(){
    this.negeriService.get().subscribe((res) => {
      console.log("negeri", res);
      this.negeri = res

    });

  }

  getDaerah(event) {

    this.daerahService.get().pipe(map(x => x.filter(i => i.U_Negeri_ID == this.form.value.U_Negeri_ID))).subscribe((res) => {
      // this.daerahService.get().subscribe((res) => {

      console.log("Daerah", res);
      this.daerah = res;

      this.getParlimen();
    });

  }

  getMukim(event) {

    this.mukimService.get().pipe(map(x => x.filter(i => i.U_Daerah_ID == this.form.value.U_Daerah_ID))).subscribe((res) => {
      // this.daerahService.get().subscribe((res) => {

      console.log("mukim", res);
      this.mukim = res;
    });
  }

  getParlimen() {

    this.parlimenService.get().pipe(map(x => x.filter(i => i.U_Negeri_ID == this.form.value.U_Negeri_ID))).subscribe((res) => {
      // this.daerahService.get().subscribe((res) => {

      console.log("parlimen", res);
      this.parlimen = res;

    });
  }

  getDun() {

    this.dunService.get().pipe(map(x => x.filter(i => i.U_Parlimen_ID == this.form.value.U_Parlimen_ID))).subscribe((res) => {
      // this.daerahService.get().subscribe((res) => {

      console.log("dun", res);
      this.dun = res;
    });
  }

  getKampung() {

    this.kampungService.get().pipe(map(x => x.filter(i => i.U_Mukim_ID == this.form.value.U_Mukim_ID))).subscribe((res) => {
      // this.daerahService.get().subscribe((res) => {

      console.log("kampung", res);
      this.kampung = res;
    });
  }

  getSeksyen() {

    this.seksyenService.get().pipe(map(x => x.filter(i => i.U_Mukim_ID == this.form.value.U_Mukim_ID))).subscribe((res) => {
      // this.daerahService.get().subscribe((res) => {

      console.log("seksyen", res);
      this.seksyen = res;
    });
  }

  async logForm(){
    const loading = await this.loadingController.create({message:'Loading ...'});
    loading.present();
    console.log(this.form.value)

    this.perniagaanService.update(this.form.value, this.usahawan_id).subscribe((res) => {
      console.log("updated data",res);


      loading.dismiss();

      this.presentAlert()
    });
  }



  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Kemaskini Berjaya',
      subHeader: 'Kemaskini Maklumat Perniagaan Telah Berjaya',
      message: '',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }




}
