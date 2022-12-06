import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-obat-edit',
  templateUrl: './obat-edit.page.html',
  styleUrls: ['./obat-edit.page.scss'],
})
export class ObatEditPage implements OnInit {

  id: any;   
  namaobat: any;  
  penyimpanan: any;
  stok: any;
  unit: any;
  kategori: any;
  kadaluwarsa: any;
  deskripsi: any;
  namapemasok: any; 

  constructor(private route: ActivatedRoute, private router: Router, public _apiService: ApiService) {
    this.route.params.subscribe((param: any) => { 
      this.id = param.id;
      console.log(this.id); 
      this.ambilObat(this.id);
    })
   }

  ngOnInit() {
  }

  ambilObat(id: any) {
    this._apiService.lihat(id, '/lihatObat.php?id=').subscribe({ 
      next: (hasil: any) => {
        console.log('sukses', hasil);
        let obat = hasil;
        this.namaobat = obat.namaobat;
        this.penyimpanan = obat.penyimpanan;
        this.stok = obat.stok;
        this.unit = obat.unit;
        this.kategori = obat.kategori;
        this.kadaluwarsa = obat.kadaluwarsa;
        this.deskripsi = obat.deskripsi;
        this.namapemasok = obat.namapemasok;
      },
      error: (error: any) => { 
        this._apiService.notif('gagal ambil data');
      }
    })
  }

  editObat() {
    let data = { 
      id: this.id,
      namaobat: this.namaobat, 
      penyimpanan: this.penyimpanan,
      stok: this.stok,
      unit: this.unit,
      kategori: this.kategori,
      kadaluwarsa: this.kadaluwarsa,
      deskripsi: this.deskripsi,
      namapemasok: this.namapemasok,
    }
    this._apiService.edit(data, '/editObat.php')
    .subscribe({
      next: (hasil: any) => { 
        console.log(hasil); 
        this.id = '';
        this.namaobat = ''; 
        this.penyimpanan = '';
        this.stok = '';
        this.unit = '';
        this.kategori = '';
        this.kadaluwarsa = '';
        this.deskripsi = '';
        this.namapemasok = '';
        this._apiService.notif('Berhasil Edit Data Obat'); 
        this.router.navigateByUrl('/obat');
      },
      error: (err: any) => { 
        this._apiService.notif('Gagal Edit Data Obat');
      }
    })
  }  
}
