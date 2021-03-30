import { Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { FotoService } from '../services/foto.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  urlImageStorage : string[] = [];

  constructor(private afStorage :  AngularFireStorage, public fotoService : FotoService) {}
  async ngOnInit(){
    await this.fotoService.loadFoto();
  }
  tambahFoto(){
    this.fotoService.tambahFoto();
  }
  uploadFoto(){
    this.urlImageStorage=[];
    for(var index in this.fotoService.dataFoto){
      const imgFilePath = `imgStorage/${this.fotoService.dataFoto[index].filePath}`;

      this.afStorage.upload(imgFilePath, this.fotoService.dataFoto[index].dataImage).then(()=>{
        this.afStorage.storage.ref().child(imgFilePath).getDownloadURL().then((url) => {
          this.urlImageStorage.unshift(url);
        });
      });
    }
  }

}
