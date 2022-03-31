import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-carian-usahawan',
  templateUrl: './carian-usahawan.page.html',
  styleUrls: ['./carian-usahawan.page.scss'],
})
export class CarianUsahawanPage implements OnInit {

  searchTerm: string;
  usahawans = [
    {
      "id": 1,
      "name": "RUZLAN BIN ABDUL RAHMAN",
      "email": "iszmael97@gmail.com",
      "email_verified_at": null,
      "usahawanid": null,
      "idpegawai": 1,
      "status_pengguna": 1,
      "no_kp": "123456789015",
      "role": "1",
      "type": "1",
      "profile_status": 1,
      "created_at": "2022-03-24T06:52:30.000000Z",
      "updated_at": "2022-03-24T06:55:31.000000Z",
      "peranan": {
        "peranan_id": "1",
        "kod_peranan": "Super Admin",
        "nama_peranan": "Super Admin"
      }
    },
    {
      "id": 2,
      "name": "ABD ZAHID BIN HAJI AHMAD",
      "email": "abdzahid@risda.gov.my",
      "email_verified_at": null,
      "usahawanid": null,
      "idpegawai": 2,
      "status_pengguna": 1,
      "no_kp": "670210000000",
      "role": "1",
      "type": "1",
      "profile_status": 0,
      "created_at": "2022-03-24T06:52:30.000000Z",
      "updated_at": "2022-03-24T06:52:30.000000Z",
      "peranan": {
        "peranan_id": "1",
        "kod_peranan": "Super Admin",
        "nama_peranan": "Super Admin"
      }
    },
    {
      "id": 3,
      "name": "ABDUL HALIM BIN ABU HASSAN",
      "email": "a.halim@risda.gov.my",
      "email_verified_at": null,
      "usahawanid": null,
      "idpegawai": 3,
      "status_pengguna": 1,
      "no_kp": "700510000001",
      "role": "1",
      "type": "1",
      "profile_status": 0,
      "created_at": "2022-03-24T06:52:31.000000Z",
      "updated_at": "2022-03-24T06:52:31.000000Z",
      "peranan": {
        "peranan_id": "1",
        "kod_peranan": "Super Admin",
        "nama_peranan": "Super Admin"
      }
    },
    {
      "id": 4,
      "name": "MAHANUM BT MAT RIPING",
      "email": "mahanum@risda.gov.my",
      "email_verified_at": null,
      "usahawanid": null,
      "idpegawai": 4,
      "status_pengguna": 1,
      "no_kp": "700510000000",
      "role": "1",
      "type": "1",
      "profile_status": 0,
      "created_at": "2022-03-24T06:52:31.000000Z",
      "updated_at": "2022-03-24T06:52:31.000000Z",
      "peranan": {
        "peranan_id": "1",
        "kod_peranan": "Super Admin",
        "nama_peranan": "Super Admin"
      }
    },
    {
      "id": 5,
      "name": "AB GHAFFAR B AB WAHAB",
      "email": "abgaffarenterprise@gmail.com",
      "email_verified_at": null,
      "usahawanid": "J00001",
      "idpegawai": null,
      "status_pengguna": 0,
      "no_kp": "690707015611",
      "role": null,
      "type": "2",
      "profile_status": 0,
      "created_at": null,
      "updated_at": null,
      "peranan": null
    },
    {
      "id": 6,
      "name": "ABD WAHAB BIN JANTAN",
      "email": "",
      "email_verified_at": null,
      "usahawanid": "J00002",
      "idpegawai": null,
      "status_pengguna": 0,
      "no_kp": "610602015217",
      "role": null,
      "type": "2",
      "profile_status": 0,
      "created_at": null,
      "updated_at": null,
      "peranan": null
    },
    {
      "id": 7,
      "name": "ABDUL HADI BIN MASIRON ",
      "email": "adieahm24@gmail.com",
      "email_verified_at": null,
      "usahawanid": "J00003",
      "idpegawai": null,
      "status_pengguna": 0,
      "no_kp": "840924017163",
      "role": null,
      "type": "2",
      "profile_status": 0,
      "created_at": null,
      "updated_at": null,
      "peranan": null
    },
    {
      "id": 8,
      "name": "ABDUL MUEIZ BIN KAMSER",
      "email": "abdulmueizkamser@gmail.com",
      "email_verified_at": null,
      "usahawanid": "J00004",
      "idpegawai": null,
      "status_pengguna": 0,
      "no_kp": "860222235447",
      "role": null,
      "type": "2",
      "profile_status": 0,
      "created_at": null,
      "updated_at": null,
      "peranan": null
    },
    {
      "id": 9,
      "name": "ABDUL RAHIM BIN TAIB",
      "email": "aimniaga2587@gmail.com",
      "email_verified_at": null,
      "usahawanid": "J00005",
      "idpegawai": null,
      "status_pengguna": 0,
      "no_kp": "740130016005",
      "role": null,
      "type": "2",
      "profile_status": 0,
      "created_at": null,
      "updated_at": null,
      "peranan": null
    },
    {
      "id": 10,
      "name": "ABDUL RAHMAN BIN MOHD LAZIM",
      "email": "",
      "email_verified_at": null,
      "usahawanid": "J00006",
      "idpegawai": null,
      "status_pengguna": 0,
      "no_kp": "870302235219",
      "role": null,
      "type": "2",
      "profile_status": 0,
      "created_at": null,
      "updated_at": null,
      "peranan": null
    },
    {
      "id": 11,
      "name": "ABDUL RAZAK BIN HARU",
      "email": "",
      "email_verified_at": null,
      "usahawanid": "J00007",
      "idpegawai": null,
      "status_pengguna": 0,
      "no_kp": "620522015849",
      "role": null,
      "type": "2",
      "profile_status": 0,
      "created_at": null,
      "updated_at": null,
      "peranan": null
    },
    {
      "id": 12,
      "name": "ABDUL SAMAD BIN WAGIMAN",
      "email": "asdila7172@gmail.com",
      "email_verified_at": null,
      "usahawanid": "J00008",
      "idpegawai": null,
      "status_pengguna": 0,
      "no_kp": "720107015313",
      "role": null,
      "type": "2",
      "profile_status": 0,
      "created_at": null,
      "updated_at": null,
      "peranan": null
    },
    {
      "id": 13,
      "name": "ABDULLAH BIN SALEHODDIN",
      "email": "paklahfoodindustry@yahoo.com",
      "email_verified_at": null,
      "usahawanid": "J00009",
      "idpegawai": null,
      "status_pengguna": 0,
      "no_kp": "750619016755",
      "role": null,
      "type": "2",
      "profile_status": 0,
      "created_at": null,
      "updated_at": null,
      "peranan": null
    },
    {
      "id": 14,
      "name": "ABU BAKAR BIN ABD SAMAD",
      "email": "adonabubakar@gmail.com",
      "email_verified_at": null,
      "usahawanid": "J00010",
      "idpegawai": null,
      "status_pengguna": 0,
      "no_kp": "580517015875",
      "role": null,
      "type": "2",
      "profile_status": 0,
      "created_at": null,
      "updated_at": null,
      "peranan": null
    },
    {
      "id": 14,
      "name": "ABU BAKAR BIN ABD SAMAD",
      "email": "adonabubakar@gmail.com",
      "email_verified_at": null,
      "usahawanid": "J00010",
      "idpegawai": null,
      "status_pengguna": 0,
      "no_kp": "580517015875",
      "role": null,
      "type": "2",
      "profile_status": 0,
      "created_at": null,
      "updated_at": null,
      "peranan": null
    },
    {
      "id": 14,
      "name": "ABU BAKAR BIN ABD SAMAD",
      "email": "adonabubakar@gmail.com",
      "email_verified_at": null,
      "usahawanid": "J00010",
      "idpegawai": null,
      "status_pengguna": 0,
      "no_kp": "580517015875",
      "role": null,
      "type": "2",
      "profile_status": 0,
      "created_at": null,
      "updated_at": null,
      "peranan": null
    },
    {
      "id": 14,
      "name": "ABU BAKAR BIN ABD SAMAD",
      "email": "adonabubakar@gmail.com",
      "email_verified_at": null,
      "usahawanid": "J00010",
      "idpegawai": null,
      "status_pengguna": 0,
      "no_kp": "580517015875",
      "role": null,
      "type": "2",
      "profile_status": 0,
      "created_at": null,
      "updated_at": null,
      "peranan": null
    }
  ]

  constructor(
    public modalController: ModalController,
  ) { }

  ngOnInit() {
  }


  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  selectDismiss(usahawan) {
   
    console.log("usahawan",usahawan)
    // this.modalController.dismiss({
    //   'dismissed': true
    // });
  }
}
