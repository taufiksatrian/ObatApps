import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular'; 
import { ApiService } from '../api.service'; 

@Component({
  selector: 'app-obat',
  templateUrl: './obat.page.html',
  styleUrls: ['./obat.page.scss'],
})

export class ObatPage implements OnInit {
  nama: any; 
  //init variable nama untuk namauser
  token: any;

  page = 0;
  perPage = 10; 
  obat: any[] = []; 
  lists: any[] = [];
  constructor(
    public _apiService: ApiService,
    private alertController: AlertController,
    private authService: AuthenticationService,
    private router: Router) { }

  ngOnInit() {
    this.loadToken();
  }

  //ceksesi untuk mengambil nama user
  loadToken() {
  this.token = this.authService.getData('token');
    if (this.token != null) {
      this.nama = this.authService.getData('username');
    } else {
      this.router.navigateByUrl('/login');
    }
  }

  //membuat fungsi logout
  logout() {
    this.authService.logout(); // lempar ke authService lalu cari fungsi logout
    this._apiService.notif('Anda telah Log Out'); 
    this.router.navigateByUrl('/', { 
      replaceUrl: true 
    }); // alihkan ke halama
  }

  ionViewDidEnter() { 
    console.log('jika selesai loading'); 
    this.page = 0;
    this.perPage = 10; 
    this.getObat();
  }

  paginateArray() { 
    this.page++;
    return this.obat.filter(
      x => x.urutan_list > (this.page * this.perPage - this.perPage) && x.urutan_list <= (this.page * this.perPage)
    );
  }

  getObat() { 
    this._apiService.tampil('tampilObat.php').subscribe({ 
      next: (res: any) => {
        console.log('sukses', res); 
        this.obat = res;
        this.lists = this.paginateArray();
      },
      error: (err: any) => { 
        console.log(err);
      },
    })
  }

  doRefresh(event: any) { 
    console.log('Mulai Refresh Konten');

  setTimeout(() => {
    console.log('Selesai Refresh Konten'); 
    event.target.complete();
    this.page = 0;
    this.perPage = 10; 
    this.getObat();
    }, 2000);
  }
    
  loadMore(event: any) { 
    console.log(event); setTimeout(() => {
      const array = this.paginateArray(); 
      console.log('new data: ', array); 
      this.lists = this.lists.concat(array); 
      console.log('list data: ', this.lists); 
      event.target.complete();
      if (array?.length < this.perPage) { 
        event.target.disabled = true;
      };
    }, 1000);
  }
    
  deleteObat(id: any) { 
    this.alertController.create({ 
      header: 'perhatian',
      subHeader: 'Yakin menghapus data ini?', 
      buttons: [
        {
          text: 'Batal',
          handler: (data: any) => { 
            console.log('dibatalkan', data);
          }
        },
        {
          text: 'Yakin',
          handler: (data: any) => {
            //jika tekan yakin
            this._apiService.hapus(id, '/hapusObat.php?id=').subscribe({ 
              next: (res: any) => {
                console.log('sukses', res); 
                this.page = 0;
                this.perPage = 10; 
                this.getObat();
              },
              error: (error: any) => { 
                this._apiService.notif('gagal');
              }
            })
          }
        }  
      ]
    }).then(res => { 
      res.present();
    })
  }

}
