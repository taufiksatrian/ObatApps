import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { ApiService } from '../api.service'; 

@Component({
  selector: 'app-obat-tambah',
  templateUrl: './obat-tambah.page.html',
  styleUrls: ['./obat-tambah.page.scss'],
})
export class ObatTambahPage implements OnInit {
  id: any;   
  namaobat: any;  
  penyimpanan: any;
  stok: any;
  unit: any;
  kategori: any;
  kadaluwarsa: any;
  deskripsi: any;
  namapemasok: any;  

  constructor(private router: Router, public _apiService: ApiService) { }

  ngOnInit() {
  }

  addObat() {
    let data = {
      namaobat: this.namaobat, 
      penyimpanan: this.penyimpanan,
      stok: this.stok,
      unit: this.unit,
      kategori: this.kategori,
      kadaluwarsa: this.kadaluwarsa,
      deskripsi: this.deskripsi,
      namapemasok: this.namapemasok,
    }
    this._apiService.tambah(data, '/tambahObat.php')
    .subscribe({
      next: (hasil: any) => { 
        console.log(hasil); this.id = '';
          this.namaobat = ''; 
          this.penyimpanan = '';
          this.stok = '';
          this.unit = '';
          this.kategori = '';
          this.kadaluwarsa = '';
          this.deskripsi = '';
          this.namapemasok = '';
          this._apiService.notif('berhasil input Obat'); 
          this.router.navigateByUrl('/obat');
      },
      error: (err: any) => { 
        this._apiService.notif('gagal input Obat');
      }
    })
  }

}
