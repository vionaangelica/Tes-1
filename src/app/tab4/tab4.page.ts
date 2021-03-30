import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { ActivatedRoute } from '@angular/router';
import { FotoService } from '../services/foto.service';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  imageName;
  urlImage = [];

  constructor(private route : ActivatedRoute, private afStorage : AngularFireStorage, public fotoService : FotoService) { 
    let image = this.route.snapshot.paramMap.get('img');
    this.imageName = image;
  }

  async ngOnInit() {
    await this.fotoService.loadFoto();
  }

  async ionViewDidEnter(){
    await this.fotoService.loadFoto();
    this.tampilkanData();
  }

  tampilkanData(){
    this.urlImage = [];
    var refImage = this.afStorage.storage.ref('imgStorage');
      refImage.listAll().then((res) =>{
      res.items.forEach((itemRef) => {
        if(itemRef.name == this.imageName){
          itemRef.getDownloadURL().then((url) => {
           this.urlImage.unshift(url);
          });
        }
      })
    }).catch((error) => {
      console.log(error);
    })
    
  }

}
